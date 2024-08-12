// document.addEventListener("DOMContentLoaded", function () {
//   const btns = document.querySelectorAll(".nav-btn");
//   const slides = document.querySelectorAll(".video-slide");
//   const contents = document.querySelectorAll(".content");

//   let currentSlide = 0;

//   function nextSlide() {
//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });

//     slides.forEach((slide) => {
//       slide.classList.remove("active");
//     });

//     contents.forEach((content) => {
//       content.classList.remove("active");
//     });

//     currentSlide++;
//     if (currentSlide >= slides.length) {
//       currentSlide = 0;
//     }

//     btns[currentSlide].classList.add("active");
//     slides[currentSlide].classList.add("active");
//     contents[currentSlide].classList.add("active");
//   }

//   function autoPlay() {
//     setInterval(nextSlide, 8000);
//   }

//   autoPlay();

//   btns.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//       currentSlide = i;
//       btns.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//       contents.forEach((content) => {
//         content.classList.remove("active");
//       });
//       btns[currentSlide].classList.add("active");
//       slides[currentSlide].classList.add("active");
//       contents[currentSlide].classList.add("active");
//     });
//   });
// });
