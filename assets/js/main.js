const hamburger = document.querySelector(".mobile-dropdown");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const returnToTopBtn = document.querySelector(".return-top");

window.addEventListener("scroll", (e) => {
  returnToTopBtn.style.display = window.scrollY > 60 ? "block" : "none";
});
