AOS.init({
  duration: 800,
  easing: "slide",
  once: false,
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".year").innerHTML = new Date().getFullYear();
});
