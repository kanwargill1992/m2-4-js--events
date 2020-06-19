const num = document.querySelector("#main");

function turnGreen(e) {
  const buttonId = e.target.id;
  document.getElementById(buttonId).classList.toggle("green");
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.id = i;
  button.innerText = i;
  num.appendChild(button);

  button.addEventListener("click", turnGreen);
}
