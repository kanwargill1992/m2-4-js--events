// Exercise 1.2
// ------------
console.log("exercise 1.2");

const num = document.querySelector("body");
const num1 = document.querySelector("#result");
const num2 = document.querySelector("#time");
let timer = Math.floor(Math.random() + 5 * 1000);
//timer
num2.innerText = timer / 1000;
let seconds = timer - 1000;
const countDown = setInterval(() => {
  if (seconds < 1) {
    clearInterval(countDown);
  }
  num2.innerText = seconds / 1000;
  seconds -= 1000;
}, 1000);

let winner = false;

function onClick() {
  winner = true;
  num1.innerText = "You won";

  num.removeEventListener("click", onClick);
}

setTimeout(function () {
  if (!winner) {
    num1.innerText = "You lose";

    num.removeEventListener("click", onClick);
  }
}, timer);

num.addEventListener("click", onClick);
