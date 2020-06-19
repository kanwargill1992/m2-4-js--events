// Exercise 1.0
// ------------
const num = document.querySelector("body");
const num1 = document.getElementById("main1");

function onClick() {
  num1.innerText = "You Win!";
  num.removeEventListener("click", onClick);
}

num.addEventListener("click", onClick);
