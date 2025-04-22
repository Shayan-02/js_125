// answer1
function horoofshomar(kalameh) {
    let tedad = 0;
    for (let i = 1; i <= kalameh.length; i++) // condition
    {
        tedad++; // body
    }
    return tedad;
}

// answer2
function countLetters2(word) {
    return word.length;
}


let str = prompt("Enter a string");

alert(countLetters(str));
