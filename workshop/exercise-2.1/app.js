const num = document.querySelector("#main");
//greens function to turn button green
function turnToGreen(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add("green");
}
//remove event listener
// num.array.forEach((button) => {
//   button.removeEventListener("click", turnTOGreen);
// });

//create the buttons
for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.id = i;
  button.innerText = i;
  num.appendChild(button);

  button.addEventListener("click", turnToGreen);
}
