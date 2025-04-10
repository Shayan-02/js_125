function playWordGuessGame() {
  const correctWord = "apple";
  const maxAttempts = correctWord.length;
  let remainingAttempts = maxAttempts;

  while (remainingAttempts > 0) {
    const userGuess = prompt(
      "حدس بزنید! شما " + remainingAttempts + " شانس باقی دارید."
    );
    if (userGuess === "") {
      alert("لطفاً یک حدس وارد کنید.");
      continue;
    }

    if (userGuess.length !== correctWord.length) {
      alert(
        "تعداد حروف وارد شده اشتباه است. کلمه صحیح " + correctWord.length + " حرف دارد."
      );
      continue;
    }

    if (userGuess.toLowerCase() === correctWord) {
      alert("تبریک! حدس صحیح بود.");
      return;
    } else {
      remainingAttempts--;
      alert("حدس نادرست! تلاش کنید.");
    }
  }

  alert("متاسفانه شانس‌های شما تمام شد. کلمه صحیح: " + correctWord);
}

playWordGuessGame();
