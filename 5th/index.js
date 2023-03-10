
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


function updateClock() {
  let currentTime = new Date();
  let currenthour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentseconds = currentTime.getSeconds();
  let currentDaystatus;
  let currentMonth = currentTime.toLocaleString("en-us", { month: "long" });
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let message = document.getElementById("message");
  
  if (currenthour >= 5 & currenthour <= 7) {
    message.innerHTML = "Good Morning!";
  } else if (currenthour == 12) {
    message.innerHTML = "Good Afternoon";
  } else if (currenthour >= 17 & currenthour <= 19) {
    message.innerHTML = "Good Evening!";
  } else if (currenthour >= 20 & currenthour <= 4) { 
    message.innerHTML = "Good Night!";
  }
  let currentDayName = days[currentTime.getDay()];

  currentDaystatus = currenthour < 12 ? "AM" : "PM";
  currenthour = currenthour > 12 ? currenthour - 12 : currenthour;
  currenthour = currenthour == 0 ? 12 : currenthour;
  currenthour = currenthour < 10 ? "0" + currenthour : currenthour;
  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentseconds = currentseconds < 10 ? "0" + currentseconds : currentseconds;

  // clock.innerHTML = currenthour + ":" + currentMinute + ":" + currentseconds;
  hours.innerHTML = currenthour + ":";
  minutes.innerHTML = currentMinute + ":";
  seconds.innerHTML = currentseconds;

  dayStatus.innerHTML = currentDaystatus;

  currentDay.innerHTML =
    currentDayName +
    ", " +
    currentMonth +
    " " +
    currentTime.getDate() +
    ", " +
    currentTime.getFullYear();
}
