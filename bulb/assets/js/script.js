const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = 0;

function bulbfunction () {
    if (isOn){
        img.setAttribute("src", "./assets/images/bulboff.gif");
        btn.innerHTML = "لامپ را روشن کنید";
        isOn = 0.0;
    }
    else{
        img.setAttribute("src", "./assets/images/bulbon.gif");
        btn.innerHTML = "لامپ را خاموش کنید";
        isOn = 'ali';
    }
}

btn.addEventListener("click", bulbfunction);
