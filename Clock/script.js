// Function to set the rotation of clock hands
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// Function to set the clock for New York
function setNewYorkClock() {
  const newYorkTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  const newYorkDate = new Date(newYorkTime);
  const secondsRatio = newYorkDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + newYorkDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + newYorkDate.getHours()) / 12;

  setRotation(newYorkSecondHand, secondsRatio);
  setRotation(newYorkMinuteHand, minutesRatio);
  setRotation(newYorkHourHand, hoursRatio);
}

// Function to set the clock for Vienna
function setViennaClock() {
  const viennaTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Vienna",
  });
  const viennaDate = new Date(viennaTime);
  const secondsRatio = viennaDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + viennaDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + viennaDate.getHours()) / 12;

  setRotation(viennaSecondHand, secondsRatio);
  setRotation(viennaMinuteHand, minutesRatio);
  setRotation(viennaHourHand, hoursRatio);
}

// Function to set the clock for Tokyo
function setTokyoClock() {
  const tokyoTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  const tokyoDate = new Date(tokyoTime);
  const secondsRatio = tokyoDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + tokyoDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + tokyoDate.getHours()) / 12;

  setRotation(tokyoSecondHand, secondsRatio);
  setRotation(tokyoMinuteHand, minutesRatio);
  setRotation(tokyoHourHand, hoursRatio);
}

// Get references to New York clock hands
const newYorkHourHand = document.querySelector(
  "#new-york-clock [data-hour-hand]"
);
const newYorkMinuteHand = document.querySelector(
  "#new-york-clock [data-minute-hand]"
);
const newYorkSecondHand = document.querySelector(
  "#new-york-clock [data-second-hand]"
);

// Get references to Vienna clock hands
const viennaHourHand = document.querySelector("#vienna-clock [data-hour-hand]");
const viennaMinuteHand = document.querySelector(
  "#vienna-clock [data-minute-hand]"
);
const viennaSecondHand = document.querySelector(
  "#vienna-clock [data-second-hand]"
);

// Get references to Tokyo clock hands
const tokyoHourHand = document.querySelector("#tokyo-clock [data-hour-hand]");
const tokyoMinuteHand = document.querySelector(
  "#tokyo-clock [data-minute-hand]"
);
const tokyoSecondHand = document.querySelector(
  "#tokyo-clock [data-second-hand]"
);

// Call the functions to set the initial clock positions
setNewYorkClock();
setViennaClock();
setTokyoClock();

// Update the clocks every second
setInterval(() => {
  setNewYorkClock();
  setViennaClock();
  setTokyoClock();
}, 1000);
