function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el; 

    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}





// DETERMINE GRID MAX HEIGHT

const root = document.documentElement;
// select body and all children except grid
const bodyAndChildrenNoGrid = document.querySelectorAll("body, body > *:not(.grid)");
const body = document.querySelector("body");
let combinedHeight = 0;

bodyAndChildrenNoGrid.forEach(el => { // get total height of them
    combinedHeight += getAbsoluteHeight(el);
});

// remove body height to only have body margins
combinedHeight = combinedHeight - document.querySelector("body").offsetHeight;

// add body padding
combinedHeight = combinedHeight + parseFloat(window.getComputedStyle(body).getPropertyValue("padding-top"));
combinedHeight = combinedHeight + parseFloat(window.getComputedStyle(body).getPropertyValue("padding-bottom"));

root.style.setProperty("--non-grid-combined-height", `${combinedHeight}px`);





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