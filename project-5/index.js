const textEl = document.getElementById("text");
const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");


textEl.addEventListener("keyup", () => {
    updateCounter();
})

//for character count
function updateCounter(){
    totalEl.innerHTML = textEl.value.length;
    remainingEl.innerHTML = textEl.getAttribute("maxLength") - textEl.value.length;
}

updateCounter();

//for word count
function getWordCount() {
    totalEl.innerHTML = textEl.value.trim().split(/\s+/).length;
    remainingEl.innerHTML = textEl.getAttribute("maxLength") - textEl.value.trim().split(/\s+/).length;
}