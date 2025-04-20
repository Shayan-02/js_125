function checkAgeForSite(age) {
    if (age >= 18) {
        return "You are allowed to enter the site";
    } else {
        return "You are not allowed to enter the site";
    }
}


let age = +prompt("Enter your age");
alert(checkAgeForSite(age));
