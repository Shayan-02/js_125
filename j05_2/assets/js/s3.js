// let num1 = 10;
// let num2 = 20;
// let num3 = 10;
// let num4 = 15;
// let num5 = 15;

// s = num1 + num2 + num3 + num4 + num5;
// avg = s / 5;

// console.log(avg);

// let sumNumbers = 0;
// let lengthNumbers = 0;
// for (let i = 1; i <= 5; i++){
//     d = +prompt("نمره درس خود را وارد کنید");
//     if (d == 0) {
//         break
//     }
//     sumNumbers += d;
//     lengthNumbers += 1;
// }

let sumNumbers = 0;
let lengthNumbers = 0;
let x = 1;
while (x <= 5) {
    d = +prompt("نمره درس خود را وارد کنید");
    if (d == 0) {
        break;
    }
    sumNumbers += d;
    lengthNumbers += 1;
    x++;
}

let miangin = sumNumbers / lengthNumbers;
alert("miangin: " + miangin);
