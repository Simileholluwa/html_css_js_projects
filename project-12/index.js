const autoEl = document.querySelector(".auto-text");
const jobs = ["Web Developer", "Mobile Developer", "Graphics Designer", "Instructor"]
let jobsIndex = 0;
let characterIndex = 0;
let jobToShow =

    updateText();

function updateText() {
    characterIndex++
    autoEl.innerHTML = `<h1>I am ${jobs[jobsIndex].slice(0, 1) === "I" ? "an" : "a"} ${jobs[jobsIndex].slice(0, characterIndex)}</h1>`
    if (characterIndex === jobs[jobsIndex].length) {
        jobsIndex++
        characterIndex = 0
    }
    if (jobsIndex === jobs.length) {
        jobsIndex = 0;
    }
    setTimeout(updateText, 300)
}