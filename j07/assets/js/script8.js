function countEvenAndOddNumbers(numbers) {
    let evenCount = 0;
    let oddCount = 0;


    numbers.forEach(function(num) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });
        alert("تعداد اعداد زوج: " + evenCount);
        alert("تعداد اعداد فرد: " + oddCount);
}


let numbers = [];
while (true) {
    let userInput = +prompt("لطفاً یک عدد وارد کنید (برای اتمام -1 را وارد کنید): ");
    if (userInput === -1) {
        break;
    }
    else if (typeof userInput !== 'number') {
        continue;
    }

    numbers.push(userInput);
}

countEvenAndOddNumbers(numbers);
