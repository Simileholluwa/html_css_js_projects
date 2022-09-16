const containerEl =document.querySelector((".container"));
const btnEl = document.querySelector(".btn")

for (let index = 0; index < 30; index++ ) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

btnEl.addEventListener("click", () => {
    window.location.reload();
})

const colorContainerEls = document.querySelectorAll(".color-container");

generatedColor();

function generatedColor(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerHTML = "#" + newColorCode;
    })
}
 

function randomColor() {
    const chars = "0123456789abcdef";
    const codeLength = 6;
    let colorCode = "";

    for (let index = 0; index < codeLength; index++){
        const random = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(random, random + 1);
    }
    return colorCode;
}