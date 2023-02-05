// Add your JavaScript code here
const box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "blue";
  box.style.color = "white";
});
box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "white";
  box.style.color = "black";
});
