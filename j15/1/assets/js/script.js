// Add your JavaScript code here

// way 1

obj = {
    ali_rezaee: {
        name: "ali rezaee",
        age: 20,
        job: "programmer",
        tel : "0987654321"
    },
    reza_ahmadi:
    {
        name: {
            fname: "reza",
            lname : "ahmadi"
        },
        age: 22,
        job: ["student", "accountant"],
        tel : ["1234567890", "765432345"]
    }
}

console.log(obj.reza_ahmadi.age);

// for (let key in obj) {
//     console.log(`${key} : ${obj[key]}`);
// }

// way 2

ali_name = "ali rezaee"
ali_age = 20
ali_job = "programmer"
ali_tel = "0987654321"

// way 3

ali_info = ["ali rezaee", 20, "programmer", "0987654321"]
reza_info = ["reza ahmadi", 22, "student", "1234567890"]
