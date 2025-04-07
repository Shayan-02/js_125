running = true;
let lst = [];
while (running) {
    let name = prompt("نام خود را وارد کنید");
    if (name == "خروج") {
        running = false;
    }
    else {
        lst.push(name);
    }
}

alert(lst)
