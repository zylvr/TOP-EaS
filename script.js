let fragment = new DocumentFragment();

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    fragment.appendChild(div);
}

const container = document.querySelector(".container");
container.appendChild(fragment);