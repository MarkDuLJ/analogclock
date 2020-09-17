const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
console.log(min);
let sec = date.getSeconds();

let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;
// let secPosition = (sec / 60) * 360;
console.log(secPosition);
// let minPosition = (min / 60) * 360 + secPosition / 60;
console.log(minPosition);
// let hrPosition = (hr / 12) * 360 + minPosition / 60;
console.log(hrPosition);

const runClock = () => {
  secPosition += 6;
  minPosition += (1 / 60) * 6;
  hrPosition += 30 / 3600;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
};

setInterval(runClock, 1000);
