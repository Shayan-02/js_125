let arr = [];
running = true;
while (running) {
    let name = prompt("نام خود را وارد کنید");
    if (name == "خروج") {
        running = false;
    }
    else {
        arr.push(name)
    }
}
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}
