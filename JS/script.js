let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 25);

function updateCountdown() {
  let now = new Date();
  let timeLeft = targetDate - now;

  if (timeLeft > 0) {
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    clearInterval(timerID);
    document.getElementById("countdown").textContent = "Time's up!";
  }
}

let timerID = setInterval(updateCountdown, 1000);

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});
