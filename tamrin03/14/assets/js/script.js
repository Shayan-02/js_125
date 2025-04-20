function countDown(number) {
    while (number > 0) {
        alert(number);
        number--;
    }
}


let number = +prompt("Enter a number");
countDown(number);
