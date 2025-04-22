function findLargestNumber() {
    running = true;
    largestNumber = 0;
    while (running) {
        let number = +prompt("Enter a number");
        if (number === 0) {
            running = false;
        }
        else if (number > largestNumber) {
            largestNumber = number;
        }
    }
    return largestNumber;
}


function findLargestNumber2(arr) {
    largestNumber = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNumber) largestNumber = arr[i]
    }
    return largestNumber;
}

let arr = [];
while (true) {
    let number = +prompt("enter a number");
    if (number === 0) break;
    else arr.push(number)
}

alert(findLargestNumber2(arr))


let largestNumber = findLargestNumber();
alert(largestNumber);
