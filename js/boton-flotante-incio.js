window.addEventListener("scroll", function () {
  var btnScrollTop = document.getElementById("btnScrollTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
});

document.getElementById("btnScrollTop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
