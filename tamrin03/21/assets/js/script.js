function countPositiveAndNegativeNumbers() {
    let positive = 0;
    let negative = 0;
    while (true) {
        let num = +prompt("Enter a number");
        if (num === 0) break;
        if (num > 0) positive++;
        else negative++;
    }
    return `positive numbers: ${positive}\n negative numbers: ${negative}`;
}


function countPositiveAndNegativeNumbers2(numbers) {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) positive++;
        else negative++;
    }
    return `positive numbers: ${positive}\n negative numbers: ${negative}`;
}


let numbers = []
while (true) {
    let num = +prompt("Enter a number");
    if (num === 0) break;
    numbers.push(num);
}

let result = countPositiveAndNegativeNumbers();
alert(result);
