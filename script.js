// Countdown Timer
const countdown = () => {
  const offerDeadline = new Date("2024-12-31T23:59:59").getTime(); // Set your deadline here
  const now = new Date().getTime();
  const timeLeft = offerDeadline - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
  } else {
    document.querySelector(".countdown").textContent = "Offer Expired!";
  }
};

// Update the countdown every second
setInterval(countdown, 1000);

//document.querySelector('.footer-newsletter form').addEventListener('submit', function (e) {
//  e.preventDefault(); // Prevent form submission for demo
//  const email = e.target.querySelector('input').value;
//  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    e.target.reset(); // Reset the form
//  } else {
//   alert('Please enter a valid email address.');
//  }
//});

