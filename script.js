const grid = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++)    {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.cssText = "background-color: white; border: 1px solid;";
    div.addEventListener("click", () => {
        if (div.style.backgroundColor == "white")
            div.style.backgroundColor = "black";
        else
            div.style.backgroundColor = "white";
    });
    grid.appendChild(div);
}