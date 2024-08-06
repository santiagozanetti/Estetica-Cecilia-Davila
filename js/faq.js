// class Accordion {
//   constructor(el) {
//     this.el = el;
//     this.summary = el.querySelector("summary");
//     this.content = el.querySelector(".faq-content");
//     this.expandIcon = this.summary.querySelector(".expand-icon");
//     this.animation = null;
//     this.isClosing = false;
//     this.isExpanding = false;
//     this.summary.addEventListener("click", (e) => this.onClick(e));
//   }

//   onClick(e) {
//     e.preventDefault();
//     if (!this.el.open) {
//       this.closeAll();
//       this.open();
//     } else {
//       this.shrink();
//     }
//   }

//   closeAll() {
//     document.querySelectorAll("details").forEach((detail) => {
//       if (detail !== this.el && detail.open) {
//         detail.open = false;
//         detail
//           .querySelector(".expand-icon")
//           .setAttribute("src", "assets/plus.svg");
//       }
//     });
//   }

//   shrink() {
//     this.isClosing = true;
//     const startHeight = `${this.el.offsetHeight}px`;
//     const endHeight = `${this.summary.offsetHeight}px`;

//     if (this.animation) {
//       this.animation.cancel();
//     }

//     this.animation = this.el.animate(
//       {
//         height: [startHeight, endHeight],
//       },
//       {
//         duration: 400,
//         easing: "ease-out",
//       }
//     );

//     this.animation.onfinish = () => {
//       this.expandIcon.setAttribute("src", "assets/plus.svg");
//       return this.onAnimationFinish(false);
//     };
//     this.animation.oncancel = () => {
//       this.expandIcon.setAttribute("src", "assets/plus.svg");
//       return (this.isClosing = false);
//     };
//   }

//   open() {
//     this.el.style.height = `${this.el.offsetHeight}px`;
//     this.el.open = true;
//     window.requestAnimationFrame(() => this.expand());
//   }

//   expand() {
//     this.isExpanding = true;
//     const startHeight = `${this.el.offsetHeight}px`;
//     const endHeight = `${
//       this.summary.offsetHeight + this.content.offsetHeight
//     }px`;

//     if (this.animation) {
//       this.animation.cancel();
//     }

//     this.animation = this.el.animate(
//       {
//         height: [startHeight, endHeight],
//       },
//       {
//         duration: 450,
//         easing: "ease-out",
//       }
//     );

//     this.animation.onfinish = () => {
//       this.expandIcon.setAttribute("src", "assets/minus.svg");
//       return this.onAnimationFinish(true);
//     };
//     this.animation.oncancel = () => {
//       this.expandIcon.setAttribute("src", "assets/minus.svg");
//       return (this.isExpanding = false);
//     };
//   }

//   onAnimationFinish(open) {
//     this.el.open = open;
//     this.animation = null;
//     this.isClosing = false;
//     this.isExpanding = false;
//     this.el.style.height = this.el.style.overflow = "";
//   }
// }

// document.querySelectorAll("details").forEach((el) => {
//   new Accordion(el);
// });

// --------------- Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
