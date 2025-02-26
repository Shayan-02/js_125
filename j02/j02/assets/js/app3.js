let num1 = +prompt("عدد اول را وارد کنید: ");
let ahmad = prompt("عملگر را وارد کنید: ")
let num2 = Number(prompt("عدد دوم را وارد کنید: "));

if (ahmad == "+"){
    alert(num1 + num2)
    console.log(num1 + num2);
    
}
if (ahmad == "/") {
  alert(num1 / num2);
  console.log(num1 / num2);
}
if (ahmad == "*") {
  alert(num1 * num2);
  console.log(num1 * num2);
}
if (ahmad == "/") {
    if (num2 != 0){
        alert(num1 / num2);
        console.log(num1 / num2);
    }
    else if (num2 === 0){
        alert("عدد دوم نباید 0 باشد")
    }
}
