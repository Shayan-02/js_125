function compareNumbers(num1, num2) {
    if (num1 > num2) return "num1 is bigger";
    if (num1 < num2) return "num2 is bigger";
    return "numbers are equal";
}

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

alert(compareNumbers(num1, num2));
