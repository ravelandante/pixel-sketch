let grid_items;
let grid_item_size;

const resize = document.querySelector("#resize");
const toggle_grid = document.querySelector("#toggle_grid");
const reset = document.querySelector("#reset");

resize.onclick = () => resizeCanvas();
reset.onclick = () => resetCanvas();
toggle_grid.onclick = () => toggleGrid();

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(grid_dims, grid_size)   {
    if (document.querySelector(".grid-container"))          
        document.querySelector(".grid-container").remove();

    const grid = document.createElement("div");

    grid_items = Math.sqrt(grid_size);
    grid_item_size = grid_dims/grid_items;
    grid.classList.add("grid-container");
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${grid_items}, ${grid_item_size}px); grid-template-rows: repeat(${grid_items}, ${grid_item_size}px); margin: auto;
                            border: ${grid_item_size/100}px solid; box-shadow: 7px 7px;`

    document.querySelector(".flex").appendChild(grid);

    for (let i = 0; i < grid_size; i++)    {
        const grid_item = document.createElement("div");
        grid_item.classList.add("grid-item");
        grid_item.style.cssText = `background-color: white; border: ${grid_item_size/100}px solid;`;
        grid_item.addEventListener('mouseover', changeColor);
        grid_item.addEventListener('mousedown', changeColor);
        grid.appendChild(grid_item);
    }
}

function changeColor(e)  {
    if (e.type === 'mouseover' && !mouseDown)
        return;
    if (e.target.style.backgroundColor == "white")  {
        const s = document.querySelector(".grid-item");
        e.target.style.backgroundColor = "black";
    }
    else
        e.target.style.backgroundColor == "white";
}

function resizeCanvas() {
    const size = document.querySelector("#size").value;
    let grid_min = Math.min(window.innerHeight*0.9, window.innerWidth*0.9);
    createGrid(grid_min*0.9, size);
}

function toggleGrid()   {
    let width = 0;
    const grid_items = document.querySelector(".grid-container").children;
    if (grid_items[0].style.border == "0px solid")
        width = grid_item_size;
    Array.from(grid_items).forEach(div => {
        div.style.border = `${width/100}px solid`;
    });
}

function resetCanvas()  {
    let colour = "white";
    const grid_items = document.querySelector(".grid-container").children;
    Array.from(grid_items).forEach(div => {
        div.style.backgroundColor = colour;
    });
}

window.onload = () => {
    resizeCanvas();
}