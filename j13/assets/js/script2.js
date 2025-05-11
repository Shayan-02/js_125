let timer = 60; // شروع تایمر از 60 ثانیه

function updateTimer() {
  if (timer > 0) {
    document.getElementById("timer").innerHTML = timer;

    timer--;

    document.getElementById("timer").innerHTML = timer;
    window.setTimeout(updateTimer, 1000); // به‌روزرسانی تایمر هر 1 ثانیه
  } else {
    document.getElementById("timer").innerHTML = "تمام شد!";
  }
}


updateTimer();
