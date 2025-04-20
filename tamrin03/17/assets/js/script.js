function calculateGrade (grade1, grade2, grade3, grade4) {
    if (grade1 < 0 || grade1 > 20 || grade2 < 0 || grade2 > 20 || grade3 < 0 || grade3 > 20 || grade4 < 0 || grade4 > 20) return "Invalid grade";
    else {
    let s = grade1 + grade2 + grade3 + grade4;
    let avg = s / 4;
    if (avg >= 18) return `your average is ${avg}, grade is A`;
    else if (avg >= 16) return `your average is ${avg}, grade is B`;
    else if (avg >= 12) return `your average is ${avg}, grade is C`;
    else if (avg >= 10) return `your average is ${avg}, grade is D`;
    else return `your average is ${avg}, grade is Fail`;
    }
}


let grade1 = +prompt("Enter grade 1");
let grade2 = +prompt("Enter grade 2");
let grade3 = +prompt("Enter grade 3");
let grade4 = +prompt("Enter grade 4");

let result = calculateGrade(grade1, grade2, grade3, grade4);
alert(result);
