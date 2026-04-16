let secondsElapsed = 0;
let stopwatchInterval = null;

const timeDisplay = document.getElementById('time-display');

function padStart(num) {
    return num.toString().padStart(2, '0');
}

function setTimeDisplay() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    timeDisplay.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function stopwatch() {
    secondsElapsed++;
    setTimeDisplay();
}

function startStopwatch() {
    if (stopwatchInterval) stopStopwatch();
    stopwatchInterval = setInterval(stopwatch,1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}
function resetStopwatch() {
  stopStopwatch();
  secondsElapsed = 0;
  setTimeDisplay();
}