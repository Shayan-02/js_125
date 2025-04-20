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


let largestNumber = findLargestNumber();
alert(largestNumber);
