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

playBtn.onclick = () => {
  modal.style.display = "flex";
  videoFrame.src = videoURL;
  playBtn.classList.add("playing");
};

closeModal.onclick = () => {
  modal.style.display = "none";
  videoFrame.src = "";
  playBtn.classList.remove("playing");
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoFrame.src = "";
    playBtn.classList.remove("playing");
  }
};

// Typewriter Effect
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

  setTimeout(typeEffect, speed);
}

typeEffect();

// Navbar Scroll
const navHeader = document.querySelector(".nav-header");
const heroHeader = document.querySelector(".hero-header");

function handleNavbarScroll() {
  if (!navHeader || !heroHeader) return;

  const triggerPoint = heroHeader.offsetHeight - navHeader.offsetHeight;
  if (window.scrollY > triggerPoint) {
    navHeader.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("resize", handleNavbarScroll);
window.addEventListener("load", handleNavbarScroll);
