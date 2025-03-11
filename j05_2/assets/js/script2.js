let sumNumbers = 0;
let lengthNumbers = 0;
let running = true;
while (running) {
    let adad = +prompt("یک عدد وارد کنید")
    if (adad == 0) {
        running = false;
    }
    else {
        sumNumbers += adad;
        lengthNumbers += 1;
    }
}

let miangin = sumNumbers / lengthNumbers;
alert(miangin)
