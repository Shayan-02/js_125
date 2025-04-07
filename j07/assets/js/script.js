function validateUserRegistration(username, password, gender) {
    if (username.length >= 5) {
        if (password.length >= 8) {
            if (gender === "زن") {
                return "ثبت‌ نام با موفقیت انجام شد.";
            }
            else {
                return "جنسیت باید حتما زن باشد.";
            }
        }
        else {
            return "رمز عبور باید حداقل 8 کاراکتر باشد.";
        }
    }
    return "نام کاربری باید حداقل 5 کاراکتر باشد.";
}


user = prompt("نام کاربری خود را وارد کنید")
pass = prompt("رمز عبور خود را وارد کنید")
g = prompt("جنسیت خود را وارد کنید")
alert(validateUserRegistration(user, pass, g))
