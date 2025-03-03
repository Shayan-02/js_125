let num1 = +prompt("عدداول");
let num2 = +prompt("عدد دوم");
let num3 = +prompt("عدد سوم");
let num4 = +prompt("عدد چهارم");

let avg = (num1 + num2 + num3 + num4) / 4;

if ((0 <=num1 <= 20) && (0 <=num2 <= 20) && (0 <=num3 <= 20) && (0 <=num4 <= 20)){
    if (avg >= 18) {
      console.log(avg + " A");
      alert(avg + "\tA")
    } else if (avg >= 16) {
      console.log(avg + " B");
      alert(avg + "\tB")
    } else if (avg >= 12) {
      console.log(avg + " C");
      alert(avg + "\tC")
    } else if (avg >= 10) {
      console.log(avg + " D");
      alert(avg + "\tD")
    } else {
      console.log("fail");
      alert("fail")
    }
}
else{
    alert("اعداد باید بین 0 تا 20 باشند")
}