/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
let grid_items;
let grid_item_size;

const resize = document.querySelector("#size");
const toggle_grid = document.querySelector("#toggle_grid");
const picker = document.querySelector("#picker");
const single = document.querySelector("#single");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#reset");

let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

let current_mode = single;
let current_colour = "#000000";

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (current_mode === single) current_colour = picker.value;
  else if (current_mode === rainbow) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    current_colour = `rgb(${R}, ${G}, ${B})`;
  } else if (current_mode === eraser) current_colour = "white";
  e.target.style.backgroundColor = current_colour;
}

function createGrid(grid_dims, grid_size) {
  if (document.querySelector(".grid-container"))
    document.querySelector(".grid-container").remove();

  const grid = document.createElement("div");

  grid_items = Math.sqrt(grid_size);
  grid_item_size = grid_dims / grid_items;
  grid.classList.add("grid-container");
  grid.style.cssText = `display: grid; grid-template-columns: repeat(${grid_items}, ${grid_item_size}px); grid-template-rows: repeat(${grid_items}, ${grid_item_size}px); margin: auto;
                              border: ${
                                grid_item_size / 100
                              }px solid; box-shadow: 7px 7px;`;

  document.querySelector(".flex").appendChild(grid);

  for (let i = 0; i < grid_size; i += 1) {
    const grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");
    grid_item.style.cssText = `background-color: white; border: ${
      grid_item_size / 100
    }px solid;`;
    grid_item.addEventListener("mouseover", changeColor);
    grid_item.addEventListener("mousedown", changeColor);
    grid.appendChild(grid_item);
  }
}

function resizeCanvas() {
  const size = document.querySelector("#size").value;
  const grid_min = Math.min(window.innerHeight * 0.9, window.innerWidth * 0.9);
  createGrid(grid_min * 0.9, size * size);
}

function toggleGrid() {
  let width = 0;
  const grid_children = document.querySelector(".grid-container").children;
  if (grid_children[0].style.border === "0px solid") width = grid_item_size;
  Array.from(grid_children).forEach((div) => {
    div.style.border = `${width / 100}px solid`;
  });
}

function resetCanvas() {
  const colour = "white";
  const grid_children = document.querySelector(".grid-container").children;
  Array.from(grid_children).forEach((div) => {
    div.style.backgroundColor = colour;
  });
}

resize.onchange = () => resizeCanvas();
toggle_grid.onclick = () => toggleGrid();
// picker.onchange = () => current_colour = picker.value;
single.onclick = () => {
  current_mode.classList.remove("enabled");
  current_mode = single;
  single.classList.add("enabled");
};
rainbow.onclick = () => {
  current_mode.classList.remove("enabled");
  current_mode = rainbow;
  rainbow.classList.add("enabled");
};
eraser.onclick = () => {
  current_mode.classList.remove("enabled");
  current_mode = eraser;
  eraser.classList.add("enabled");
};
reset.onclick = () => resetCanvas();

window.onload = () => {
  resizeCanvas();
};
