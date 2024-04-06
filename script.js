let fragment = new DocumentFragment();

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    fragment.appendChild(div);
}

const container = document.querySelector(".grid");
container.appendChild(fragment);

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")) {
        e.target.classList.add("hover");
    }
});