const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menuUl = document.querySelector(".menu-nav-list ul");
const html = document.querySelector("html");

btnOpen.addEventListener("click", () => {
  menuUl.style.display = "flex";
  btnOpen.classList.remove("active");
  btnOpen.style.display = "none";
  btnClose.style.display = "inline-block";
  btnClose.classList.add("active");
  html.style.overflow = "hidden";
});

btnClose.addEventListener("click", () => {
  menuUl.style.display = "none";
  btnClose.classList.remove("active");
  btnClose.style.display = "none";
  btnOpen.style.display = "inline-block";
  btnOpen.classList.add("active");
  html.style.overflow = "auto";
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".inicio-bv", {
    distance: "100px",
    origin: "left",
    opcity: 0,
    duration: 1400,
    reset: false,
    easing: "ease-in-out",
    interval: 100,
  });
  ScrollReveal().reveal(".pratos", {
    distance: "100px",
    origin: "bottom",
    opcity: 0,
    duration: 1500,
    reset: false,
    easing: "ease-in-out",
    interval: 100,
  });

  ScrollReveal().reveal("footer", {
    distance: "20px",
    origin: "bottom",
    opcity: 0,
    duration: 1545,
    reset: false,
    easing: "ease-in-out",
    interval: 100,
  });
});
