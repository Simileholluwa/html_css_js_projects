const navEl = document.querySelector(".navbar");
const sectionEl = document.querySelector(".sect");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > sectionEl.offsetTop - 100){
        navEl.classList.add("active");
    } else {
        navEl.classList.remove("active");
    }
});