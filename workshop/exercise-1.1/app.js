// Exercise 1.1
// ------------
console.log("exercise 1.1");

const num = document.querySelector("body");
const num1 = document.querySelector("#result");

let winner = false;

function onClick() {
  winner = true;
  num1.innerText = "You Won";

  num.removeEventListener("click", onClick);
}

setTimeout(function () {
  if (!winner) {
    num1.innerText = "You lose";
    num.removeEventListener("click", onClick);
  }
}, 1000);

num.addEventListener("click", onClick);
