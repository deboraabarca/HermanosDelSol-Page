// main.js
document.addEventListener("DOMContentLoaded", () => {
  const weSection = document.querySelector('.we');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      weSection.classList.add('animate');
      observer.disconnect(); 
    }
  });
  observer.observe(weSection);
});
// scroll 
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    });
  });
});
