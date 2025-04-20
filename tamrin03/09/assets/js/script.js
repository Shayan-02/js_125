function guessNumberGame() {
    correctNumber = 80;
    for (let i = 1; i <= 5; i++) {
        number = +prompt("Enter a number");
        if (number === correctNumber) {
            return "You win";
        }
        else if (number < correctNumber) {
            alert("Too low");
        }
        else {
            alert("Too high");
        }
    }
    return "You lose";
}


alert(guessNumberGame());
