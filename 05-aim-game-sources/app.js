const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const colors = [
  "tomato",
  "GreenYellow",
  "HotPink",
  "Ivory",
  "Magenta",
  "MediumBlue",
  "MediumSpringGreen",
  "Orange",
];
let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

const finishGame = () => {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`;
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const createRandomCircle = () => {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;
  board.append(circle);
};

const startGame = () => {
  setInterval(() => {
    if (time === 0) {
      finishGame();
    } else {
      let current = --time;
      if (current < 10) {
        current = `0${current}`;
      }
      setTime(current);
    }
  }, 1000);
  screens[1].classList.add("up");
  createRandomCircle();
  setTime(time);
};

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});
