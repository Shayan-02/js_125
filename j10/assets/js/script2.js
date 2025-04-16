const elem = document.querySelectorAll(".li-items")
const click_b = document.querySelector(".c_btn")
console.log(elem);

function click_btn() {
    elem.forEach(function (li) {
        li.style.color = "red";
        li.style.fontSize = "30px"
    })
}

function dblclick_btn() {
    elem.forEach(function (li) {
      li.style.color = "blue";
      li.style.fontSize = "20px";
    });
}


click_b.addEventListener('click', click_btn);
click_b.addEventListener("dblclick", dblclick_btn);
