let user1 = prompt("انتخاب علی");
let user2 = prompt("انتخاب ممد");

if (user1 == "سنگ" || user1 == "کاغذ" || user1 == "قیچی"){
    if (user2 == "سنگ" || user2 == "کاغذ" || user2 == "قیچی") {
        if (user1 == user2){
            console.log("مساوی");
        }
        else if (user1 == "سنگ"){
            if (user2 == "کاغذ"){
                console.log("ممد برنده شد");
            }
            else{
                console.log("علی برنده شد");
            }
        }
        else if (user1 == "کاغذ"){
            if (user2 == "قیچی"){
                console.log("ممد برنده شد");
            }
            else{
                console.log("علی برنده شد");
            }
        }
        else if (user1 == "قیچی"){
            if (user2 == "سنگ") {
              console.log("ممد برنده شد");
            } else {
              console.log("علی برنده شد");
            }
        }
    }
}
else{
    console.log("ورودی اشتباه است");
}
