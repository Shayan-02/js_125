function countEvenAndOddNumbers() {
    evenCount = 0;
    oddCount = 0;
    while (true) {
        let number = +prompt("Enter a number");
        if (number === 0) break;
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return `Even numbers: ${evenCount}\n Odd numbers: ${oddCount}`;
}


let result = countEvenAndOddNumbers();
alert(result);
