
let messaage =document.querySelector(".letter");
let sountLett = document.querySelector(".countLetter small");
let maxlenght=messaage.getAttribute("maxlength");
sountLett.innerHTML = maxlenght +  "/200";

messaage.oninput = function () {
    sountLett.innerHTML = maxlenght - this.value.length;
  
    if(sountLett.innerHTML <= 20){
        sountLett.classList.add("zero");
    
    }else{
        sountLett.classList.remove("zero");
    }
  
  };
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

//  numbers code
let startedNum = false;
let startedBars = false;

window.onscroll = function () {
    // Code for numbers increment
    let section = document.querySelector(".section3");
    let num = document.querySelectorAll(".num h2");

    if (window.scrollY >= section.offsetTop -250) {
        if (!startedNum) {
            num.forEach((num) => upNumber(num));
        }
        startedNum = true;
    }

    function upNumber(ele) {
        let goal = ele.dataset.goal;
        let up = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == goal) {
                clearInterval(up);
            }
        }, 2000 / goal);
    }

    // Code for progress bars
    let sectionBars = document.querySelector(".section4");
    let progress = document.querySelectorAll(".bars span");

    if (window.scrollY >= sectionBars.offsetTop - 250) {
        if (!startedBars) {
            progress.forEach((span) => {
                span.style.width = span.dataset.width;
            });
        }
        startedBars = true;
    }
};
