const grid = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++)    {
    const div = document.createElement("div");
    div.textContent = i;
    div.classList.add("grid-item");
    div.style.cssText = "border: 1px solid;";
    grid.appendChild(div);
}