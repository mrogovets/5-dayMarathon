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
const SQUARES_NUMBER = 600;

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}
