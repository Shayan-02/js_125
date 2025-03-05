let num1 = +prompt("عدد اول");
let op = prompt("عملگر")
let num2 = +prompt("عدد اول");

switch(op){
    // if (op == "+"){
    //      console.log(num1 + num2)
    // }
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("amalgar ghalat");
        break;
}