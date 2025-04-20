function verifySecurityCode(code) {
    if (code === 1234) return "code is correct";
    return "code is incorrect";
}

let code = +prompt("Enter security code");

alert(verifySecurityCode(code));
