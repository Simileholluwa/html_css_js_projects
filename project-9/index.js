const btnEl = document.querySelector(".btn")
const videoEl = document.querySelector(".video-container")
const closeEl = document.querySelector(".icon")
const mainEl = document.querySelector(".main-container")

btnEl.addEventListener("click", () => {
    videoEl.classList.add("active")
    mainEl.classList.add("active")
})

closeEl.addEventListener("click", () => {
    videoEl.classList.remove("active")
    mainEl.classList.remove("active")
})

