var collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
