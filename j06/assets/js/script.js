// let sumNumbers = 0;
// let lengthNumbers = 0;

// while (true) {
//     let adad = +prompt("یک عدد وارد کنید\nبرای اتمام برنامه عدد 0 را وارد کنید")
//     if (adad == 0) {
//         break;
//     }
//     else {
//         sumNumbers += adad;
//         lengthNumbers += 1
//     }
// }

// miangin = sumNumbers / lengthNumbers

// alert("مجموع اعداد : " + sumNumbers + "\n" + "تعداد اعداد : " + lengthNumbers + "\n" + "میانگین : " + miangin)

// function test(name) {
//     alert("hello " + name)
// }
// let firstname = prompt("نام خود را وارد کنید")
// test(firstname)

function moadel(num1, num2, num3, num4, num5) {
    let sumNumbers = num1 + num2 + num3 + num4 + num5;
    let miangin = sumNumbers / 5;
    return miangin
}

number1 = +prompt("یک عدد وارد کنید")
number2 = +prompt("یک عدد وارد کنید")
number3 = +prompt("یک عدد وارد کنید")
number4 = +prompt("یک عدد وارد کنید")
number5 = +prompt("یک عدد وارد کنید")

let m = moadel(number1, number2, number3, number4, number5);
alert(m)
alert(m * 2);
