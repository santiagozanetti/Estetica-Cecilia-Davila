document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Swiper
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1, 
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Ajusta la configuración para dispositivos móviles
      768: {
        slidesPerView: 2, 
      },
    },
  });
});
