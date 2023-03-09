const GRID_DIMS = 49;
const GRID_SIZE = 400;
const GRID_ITEMS = Math.sqrt(GRID_DIMS);

const grid = document.createElement("div");
grid.class = "grid-container";
grid.style.cssText = `display: grid; grid-template-columns: repeat(${GRID_ITEMS}, ${GRID_SIZE/GRID_ITEMS}px); grid-template-rows: repeat(${GRID_ITEMS}, ${GRID_SIZE/GRID_ITEMS}px);`
document.querySelector("body").appendChild(grid);

for (let i = 0; i < GRID_DIMS; i++)    {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.cssText = "background-color: white; border: 1px solid;";
    div.addEventListener("mousedown", () => {
        if (div.style.backgroundColor == "white")
            div.style.backgroundColor = "black";
        else
            div.style.backgroundColor = "white";
    });
    grid.appendChild(div);
}