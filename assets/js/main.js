const hamburger = document.querySelector(".mobile-dropdown");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
