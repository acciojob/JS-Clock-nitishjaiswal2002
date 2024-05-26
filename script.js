const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // Add 90 to offset the initial transform
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Add 90 to offset the initial transform
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // Add 90 to offset the initial transform
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function initClock() {
  setDate();
  setTimeout(() => {
    secondHand.style.transition = 'all 0.05s';
    minHand.style.transition = 'all 0.05s';
    hourHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }, 100); // Adding a slight delay before applying the transition
}

setInterval(setDate, 1000);
initClock(); // Call it once to set the initial position
