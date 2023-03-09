

function createGrid(grid_dims, grid_size)   {
    const old_grid = document.querySelector(".grid-container");
    if (old_grid)   {
        old_grid.remove();
    }

    const grid = document.createElement("div");

    let grid_items = Math.sqrt(grid_size);
    let grid_item_size = grid_dims/grid_items;
    grid.classList.add("grid-container");
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${grid_items}, ${grid_item_size}px); grid-template-rows: repeat(${grid_items}, ${grid_item_size}px); margin: auto;`

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
    let grid_min = Math.min(window.innerHeight, window.innerWidth);
    createGrid(grid_min, size);
}

resizeCanvas();

const resize = document.querySelector("#resize");

resize.addEventListener("click", () => {
    resizeCanvas();
});