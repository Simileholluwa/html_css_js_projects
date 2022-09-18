const mainEl = document.querySelector(".main-container")
const showEl = document.querySelector(".show-background")
const btnEl = document.querySelector(".btn")
const btnGoEl = document.querySelector(".btn-go")

btnEl.addEventListener("click", () => {
    mainEl.classList.add("active")
    showEl.classList.add("active")
})

btnGoEl.addEventListener("click", () => {
    mainEl.classList.remove("active")
    showEl.classList.remove("active")
})