document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
        slide.style.opacity = "1";
      } else {
        slide.classList.remove("active");
        slide.style.opacity = "0";
      }
    });
  }

  document.querySelector(".next-btn").addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  document.querySelector(".prev-btn").addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  });

  // Mostrar el primer testimonio al cargar la página
  showSlide(currentIndex);
});
