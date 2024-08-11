const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const timer = document.querySelector(".timer");

let interval;
let timeLeft = 1500;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function updateTime() {
  let min = Math.floor(timeLeft / 60);
  let sec = timeLeft % 60;
  let formattedTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
  timer.innerHTML = formattedTime;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      timeLeft--;
      updateTime();
      if (timeLeft === 0) {
        clearInterval(interval);
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  timeLeft = 1500;
  updateTime();
}
