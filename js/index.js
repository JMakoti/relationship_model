// Preloader Spinner
window.addEventListener("load", function () {
  const spinner = document.getElementById("spinner");

  // Small delay for smooth UX
  setTimeout(() => {
    spinner.classList.add("hide");
  }, 500);
});

// Navbar Scroll - Optimized with RequestAnimationFrame and Debouncing
const navHeader = document.querySelector(".nav-header");
const heroHeader = document.querySelector(".hero-header");

let ticking = false;
let lastScrollY = 0;

function handleNavbarScroll() {
  if (!navHeader || !heroHeader) return;

  const triggerPoint = heroHeader.offsetHeight - navHeader.offsetHeight;
  
  if (lastScrollY > triggerPoint) {
    if (!navHeader.classList.contains("scrolled")) {
      navHeader.classList.add("scrolled");
    }
  } else {
    if (navHeader.classList.contains("scrolled")) {
      navHeader.classList.remove("scrolled");
    }
  }
  
  ticking = false;
}

function onScroll() {
  lastScrollY = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(handleNavbarScroll);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
  lastScrollY = window.scrollY;
  handleNavbarScroll();
});
window.addEventListener("load", handleNavbarScroll);

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  if (typeTimeout) clearTimeout(typeTimeout);
});
