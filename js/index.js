// Testimonial slider
const slider = document.getElementById("testimonial-slider");
const dots = document.querySelectorAll(".testimonial-dot");
let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentSlide = (currentSlide + 1) % dots.length;
  showSlide(currentSlide);
}, 5000);

// Floating elements animation
document.addEventListener("DOMContentLoaded", () => {
  const floatingElements = document.querySelectorAll(".floating-element");

  floatingElements.forEach((element, index) => {
    // Randomize initial position and animation
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    const duration = 15 + Math.random() * 10;

    element.style.animation = `float ${duration}s infinite ease-in-out`;
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  // Add CSS for floating animation
  const style = document.createElement("style");
  style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(-10px) translateX(-10px); }
                    75% { transform: translateY(-30px) translateX(5px); }
                }
            `;
  document.head.appendChild(style);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
