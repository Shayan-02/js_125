function checkNumberSign(number) {
    if (number === 0) return "number is zero";
    if (number > 0) return "number is positive";
    return "number is negative";
}


let number = +prompt("Enter a number");

alert(checkNumberSign(number));
