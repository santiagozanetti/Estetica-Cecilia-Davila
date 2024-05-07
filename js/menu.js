const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation-items a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Agregar evento de clic a cada enlace del menú
navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Cerrar el menú al hacer clic en un enlace
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});
