function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


let number = +prompt("یک عدد وارد کنید")
alert(factorial(number));
