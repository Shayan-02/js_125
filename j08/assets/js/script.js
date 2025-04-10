// Add your JavaScript code here
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = 0; i < arr.length ; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr;
}


let lst = [1, 2, 3, 4, 5]
alert(reverseArray(lst));
