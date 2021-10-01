const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragstart = (event) => {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
};

const dragend = (event) => {
  event.target.className = "item";
};

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  placeholder.addEventListener("dragenter", (event) => {
    event.target.classList.add("hovered");
  });
  placeholder.addEventListener("dragleave", (event) => {
    event.target.classList.remove("hovered");
  });
  placeholder.addEventListener("drop", (event) => {
    event.target.append(item);
    event.target.classList.remove("hovered");
  });
}

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
