// Preloader Spinner
window.addEventListener("load", function () {
  const spinner = document.getElementById("spinner");

  // Small delay for smooth UX
  setTimeout(() => {
    spinner.classList.add("hide");
  }, 500);
});

// Youtube Modal Functionality
const playBtn = document.getElementById("playBtn");
const modal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");
const videoFrame = document.getElementById("videoFrame");

const videoURL = "https://www.youtube.com/embed/910-SqNfno4?autoplay=1";

// Debounced modal close function
function closeVideoModal() {
  modal.style.display = "none";
  videoFrame.src = "";
  playBtn.classList.remove("playing");
}

playBtn.onclick = () => {
  modal.style.display = "flex";
  videoFrame.src = videoURL;
  playBtn.classList.add("playing");
};

closeModal.onclick = closeVideoModal;

window.onclick = (e) => {
  if (e.target === modal) {
    closeVideoModal();
  }
};

// Typewriter Effect - Optimized
const texts = [
  "Ever wondered how to have a relationship of true unity?",
  "Did you know there is knowledge and a framework that builds power couples?",
  "Is your relationship in trouble and in need of some serious work?",
  "Are you about to begin a new relationship and find yourself petrified of it ending in ruins?",
  "Is your relationship in a good space but you just know it could be great?",
];

const textElement = document.getElementById("sub-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex++);
  } else {
    textElement.textContent = currentText.substring(0, charIndex--);
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500; // pause before typing next
  }

  typeTimeout = setTimeout(typeEffect, speed);
}

typeEffect();

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
