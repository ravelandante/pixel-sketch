let grid_items;
let grid_item_size;

function createGrid(grid_dims, grid_size)   {
    const old_grid = document.querySelector(".grid-container");
    if (old_grid)   {
        old_grid.remove();
    }

    const grid = document.createElement("div");

    grid_items = Math.sqrt(grid_size);
    grid_item_size = grid_dims/grid_items;
    grid.classList.add("grid-container");
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${grid_items}, ${grid_item_size}px); grid-template-rows: repeat(${grid_items}, ${grid_item_size}px); margin: auto;
                            border: ${grid_item_size/100}px solid;`

    document.querySelector(".flex").appendChild(grid);

    for (let i = 0; i < grid_size; i++)    {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.cssText = `background-color: white; border: ${grid_item_size/100}px solid;`;
        div.addEventListener("mouseover", () => {
            if (div.style.backgroundColor == "white")
                div.style.backgroundColor = "black";
            else
                div.style.backgroundColor = "white";
        });
        grid.appendChild(div);
    }
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

resizeCanvas();

const resize = document.querySelector("#resize");
const toggle_grid = document.querySelector("#toggle_grid");

resize.addEventListener("click", () => {
    resizeCanvas();
});

toggle_grid.addEventListener("change", () => {
    toggleGrid();
});