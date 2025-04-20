function convertYear(type, year) {
    if (type === "miladi") return year - 621;
    else if (type === "shamsi") return year + 621;
    else return "Invalid type";
}


let type = prompt("Enter type (miladi or shamsi)");
let year = +prompt("Enter year");

let result = convertYear(type, year);
alert(result);
