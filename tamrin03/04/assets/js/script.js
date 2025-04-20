// answer1
function countLetters(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        count++;
    }
    return count;
}

// answer2
function countLetters2(word) {
    return word.length;
}


let str = prompt("Enter a string");

alert(countLetters(str));
