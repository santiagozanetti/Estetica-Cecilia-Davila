document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Swiper
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 2, // Mostrar 2 slides al mismo tiempo
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 6000, // Cambia cada 5 segundos
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
