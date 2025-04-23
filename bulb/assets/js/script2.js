const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false;

function changeimg() {
  if (isOn) {
    img.setAttribute("src", "./assets/images/bulboff.gif");
    btn.innerHTML = "turn on";
    isOn = false;
  } else {
    img.setAttribute("src", "./assets/images/bulbon.gif");
    btn.innerHTML = "turn of";
    isOn = true;
  }
}

btn.addEventListener("click", changeimg);
