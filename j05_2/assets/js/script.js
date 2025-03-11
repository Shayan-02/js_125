// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// let start = +prompt("شروع بازه را وارد کنید");
// let end = +prompt("پایان بازه را وارد کنید");

// for (let i = 1; i <= 10; i += 1) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (start; start <= end; start++) {
//     if (start % 2 == 0) {
//         alert(start);
//     }
// }

// let x = 1;
// while (x <= 10) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
//     x++;
// }

let start = 1;
let end = 20;

for (start; start <= end; start++) {
    if (start == 18) {
        break
    }
    if (start == 7 || start == 13) {
        continue
    }
    else {
        console.log(start);
    }
}
