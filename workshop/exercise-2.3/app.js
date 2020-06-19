const num = document.querySelector("#main");

function turnGreen(e) {
  const buttonId = e.target.id;
  document.getElementById(buttonId).classList.toggle("green");
}

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = i;
  button.style.top = `${Math.floor(Math.random() * 1000)}px`;
  button.style.right = `${Math.floor(Math.random() * 1000)}px`;
  num.appendChild(button);

  button.addEventListener("click", turnGreen);
}
