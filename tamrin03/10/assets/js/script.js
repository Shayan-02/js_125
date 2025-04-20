function validateUserRegistration(userName, password, gender) {
    if (userName.length >= 5) {
        if (password.length >= 8) {
            if (gender == "male") {
                return "login successful";
            }
            else {
                return "gender must be male";
            }
        }
        else {
            return "password must be at least 8 characters";
        }
    }
    else {
        return "username must be at least 5 characters";
    }
}


let userName = prompt("Enter username");
let password = prompt("Enter password");
let gender = prompt("Enter gender");

alert(validateUserRegistration(userName, password, gender));
