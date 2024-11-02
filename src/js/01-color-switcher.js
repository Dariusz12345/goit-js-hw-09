const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart() {
  // Dezaktywuj przycisk "Start"
  startButton.disabled = true;
  
  // Uruchom interwał zmiany koloru
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  // Zatrzymaj interwał i aktywuj przycisk "Start"
  clearInterval(intervalId);
  startButton.disabled = false;
}

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

