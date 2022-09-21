//Manual switching

const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem("mode"))

updateBody();

function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black"
    }
    else {
        bodyEl.style.background = "white"
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

//Auto switching to be completed
const currentTime = new Date()
hour = currentTime.getHours()

let timeOfDay;

if (hour >= 19 || hour <= 7) {
    timeOfDay = "Evening"
} else {
    timeOfDay = "Morning"
}

console.log(timeOfDay)