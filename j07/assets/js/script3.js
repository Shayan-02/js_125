function mypower(a) {
    if (typeof(a) === Number) {
        a ** 2;
    }
    else {
        console.log("invalid input");
    }
}

let number = 2;
console.log(mypower(number));
let number2 = 3;
console.log(mypower(number2));



let myPower = function (a, b) {
  return b ** a;
};

let a = 3;
let b = 2;

console.log(myPower(a, b));


const myPower2 = (a, b) => a ** b;
let first = 5;
let second = 3;
console.log(myPower2(first, second));
