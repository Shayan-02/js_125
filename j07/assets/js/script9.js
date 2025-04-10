function playWordGuessGame() {
  const wordsList = [
    "apple",
    "banana",
    "grape",
    "melon",
    "cherry",
    "peach",
    "plum",
    "kiwi",
    "pear",
    "mango",
  ];
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  const correctWord = wordsList[randomIndex];
  const maxAttempts = correctWord.length;
  let remainingAttempts = maxAttempts;
  let previousGuesses = [];

  while (remainingAttempts > 0) {
    const userGuess = prompt(
      "حدس بزنید! شما " + remainingAttempts + " شانس باقی دارید.");

    if (userGuess === "") {
      alert("لطفاً یک حدس وارد کنید.");
      continue;
    }

    if (previousGuesses.includes(userGuess)) {
      alert("کلمه وارد شده تکراری است. لطفاً حدس جدید وارد کنید.");
      continue;
    }

    previousGuesses.push(userGuess);

    if (userGuess.length !== correctWord.length) {
      alert(
        "تعداد حروف وارد شده اشتباه است. کلمه صحیح " +
          correctWord.length +
          " حرف دارد."
      );
      continue;
    }

    if (userGuess.toLowerCase() === correctWord) {
      alert("تبریک! حدس صحیح بود.");
      return;
    } else {
      remainingAttempts--;
      alert("حدس نادرست!");
    }
  }

  alert("متاسفانه شانس‌های شما تمام شد. کلمه صحیح: " + correctWord);
}

playWordGuessGame();
