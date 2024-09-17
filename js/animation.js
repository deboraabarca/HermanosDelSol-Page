// main.js
document.addEventListener("DOMContentLoaded", () => {
  const weSection = document.querySelector('.we');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      weSection.classList.add('animate');
      observer.disconnect(); // Deja de observar tras activarse
    }
  });
  observer.observe(weSection);
});
