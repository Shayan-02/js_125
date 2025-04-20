function calculateFactorial (number) {
    if (number < 0) return "Invalid number";
    else if (number === 0 || number === 1) return 1;
    else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}


let number = +prompt("Enter a number");
let result = calculateFactorial(number);
alert(result);
