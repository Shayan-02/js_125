function findSmallestNumber(arr) {
    let min_number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min_number) min_number = arr[i];
    }
    return min_number
}


let array = [];
let running = true;
while (running) {
    number = +prompt("enter a number");
    if (number === -1) break;
    array.push(number);
}

alert(findSmallestNumber(array))
