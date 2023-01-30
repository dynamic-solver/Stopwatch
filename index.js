const clock = document.querySelector(".clock");

// set initial timing
let second = 0,
  minute = 0,
  hour = 0,
  intervalId;

//   For start the stopwatch
const startStopWatch = () => {
  intervalId = setInterval(() => {
    if (second < 59) {
      second++;
    } else if (minute >= 59) {
      minute = 0;
      hour++;
    } else {
      second = 0;
      minute++;
    }
    // added padding characters at the start
    const seconds = String(second).padStart(2, "0");
    const minutes = String(minute).padStart(2, "0");
    const hours = String(hour).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

// for stopping the stopwatch
const stopStopWatch = () => {
  clearInterval(intervalId);
};

// for reset the stopwatch
const resetStopWatch = () => {
  clock.innerText = "00:00:00";
  second = 0;
  stopStopWatch();
};
