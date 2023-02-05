// Example of a JavaScript animation
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.style.opacity = 1 - +window.pageYOffset / 200 + "";
});
