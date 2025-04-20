function sumOfEvenNumbers (number) {
    if (number < 0) return "Invalid number";
    else if (number === 0) return 0;
    else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0) sum += i;
        }
        return sum;
    }
}


let number = +prompt("Enter a number");
let result = sumOfEvenNumbers(number);
alert(result);
