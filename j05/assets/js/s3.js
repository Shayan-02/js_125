// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

s = 0;
for (let y = 1; y <= 5; y++) {
    let x = +prompt("نمره خود را وارد کنید");
    s = s + x;
}
avg = s / 5
alert(avg)
