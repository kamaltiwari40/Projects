let startTime;
let elapsedTime = 0;
let previousSeconds = 0;
let timerInterval = null;

const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function start() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1); // Update the timer every millisecond
    startButton.textContent = 'Pause';
  }
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
  previousSeconds = 0; // Reset the previous seconds value
  startButton.textContent = 'Start';
}

function reset() {
  stop();
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  let seconds = Math.floor(elapsedTime / 1000);

  if (seconds !== previousSeconds) { // Update the display only when seconds change
    previousSeconds = seconds;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 100;

    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);