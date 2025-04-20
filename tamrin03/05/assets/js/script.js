function greetUser(type, name) {
    if (type === "رسمی") return `خوش آمدید ${name}`;
    if (type === "غیر رسمی") return `سلام ${name}`;
}


let type = prompt("نوع خوش آمد گویی را وارد کنید");
let name = prompt("نام خود را وارد کنید");

alert(greetUser(type, name));
