function checkFormCompletion(name, email, tel) {
    if (name && email && tel) return "completed";
    return "not completed";
}


let name = prompt("Enter name");
let email = prompt("Enter email");
let tel = prompt("Enter tel");

alert(checkFormCompletion(name, email, tel));
