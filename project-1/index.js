const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
const greetingEL = document.getElementById("greeting");

function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM";
    let greet = "Morning"

    if (h > 12){
        ampm = "PM"    
    }

    if (h >= 12 && h <= 17){
        h = h - 12;
        greet = "Afternoon";
    }

    if (h > 17 && h <= 24){
        h = h - 12;
        greet = "Evening"
    }

    if (h > 24 && h < 13 ){
        h = h - 12;
        greet = "Morning"
    }

    h = h < 10 ? "0"+ h : h;
    m = m < 10 ? "0"+ m : m;
    s = s < 10 ? "0"+ s : s;

    hourEL.innerText = h;
    minutesEL.innerText = m;
    secondsEL.innerText = s;
    ampmEL.innerText = ampm;
    greetingEL.innerText = greet;
    
    setTimeout(() => {
        UpdateClock()
    }, 1000)
}
UpdateClock()
