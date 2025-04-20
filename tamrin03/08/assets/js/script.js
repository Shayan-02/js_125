function loginUser(username, password) {
    if (username === "admin" && password === "1234") return "login successful";
    return "login failed";
}

let username = prompt("Enter username");
let password = prompt("Enter password");

alert(loginUser(username, password));
