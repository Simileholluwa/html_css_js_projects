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
    totalEl.innerHTML = textEl.value.split(' ').filter(function(n) { return n != '' }).length;
    remainingEl.innerHTML = textEl.getAttribute("maxLength") - textEl.value.split(' ').length;
}