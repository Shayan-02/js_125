function sumOfEvenNumbers(number) {
    s = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            s += i;
        }
    }
    return "مجموع اعداد زوج: " + s;
}


let number = +prompt("یک عدد وارد کنید")
alert(sumOfEvenNumbers(number))
