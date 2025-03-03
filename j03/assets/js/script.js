let num1 = +prompt("عدد اول را وارد کنید")
let op = prompt("عملگر را وارد کنید")
let num2 = +prompt("عدد اول را وارد کنید");

if (op == "+"){
    alert(num1 + num2);
}
else if (op == "-") {
  alert(num1 - num2);
}
else if (op == "*") {
  alert(num1 * num2);
}
else if (op == "/") {
    if (num2 == 0){
        alert("نمیتوان عددی را تقسیم بر صفر کرد");
        
    }
    else{
        console.log(num1 / num2);
    }
}
else{
    console.log("عملگر درست وارد کنید");
}