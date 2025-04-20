function calculateSumAndAverage() {
    let sum = 0;
    let count = 0;
    while (true) {
        let num = +prompt("Enter a number");
        if (num === 0) break;
        sum += num;
        count++;
    }
    let avg = sum / count;
    return `sum is ${sum}\naverage is ${avg}`;
}


function calculateSumAndAverage2(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let avg = sum / numbers.length;
    return `sum is ${sum}\naverage is ${avg}`;
}


let numbers = []
while (true) {
    let num = +prompt("Enter a number");
    if (num === 0) break;
    numbers.push(num);
}

let result = calculateSumAndAverage2(numbers);
alert(result);
