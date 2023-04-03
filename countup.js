// Set the start date and time
const startDate = new Date('2023-03-30T07:00:00Z');

// Get the current date and time
const currentDate = new Date();

// Calculate the elapsed time in milliseconds
const elapsedTime = currentDate.getTime() - startDate.getTime();

// Calculate the elapsed time in seconds, minutes, hours, and days
const elapsedSeconds = Math.floor(elapsedTime / 1000);
const elapsedMinutes = Math.floor(elapsedSeconds / 60);
const elapsedHours = Math.floor(elapsedMinutes / 60);
const elapsedDays = Math.floor(elapsedHours / 24);

// Update the contents of the span elements with the corresponding values
document.getElementById('days').innerHTML = elapsedDays;
document.getElementById('hours').innerHTML = elapsedHours % 24;
document.getElementById('minutes').innerHTML = elapsedMinutes % 60;
document.getElementById('seconds').innerHTML = elapsedSeconds % 60;

// Update the timer every second
setInterval(() => {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the elapsed time in milliseconds
  const elapsedTime = currentDate.getTime() - startDate.getTime();

  // Calculate the elapsed time in seconds, minutes, hours, and days
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);

  // Update the contents of the span elements with the corresponding values
  document.getElementById('days').innerHTML = elapsedDays;
  document.getElementById('hours').innerHTML = elapsedHours % 24;
  document.getElementById('minutes').innerHTML = elapsedMinutes % 60;
  document.getElementById('seconds').innerHTML = elapsedSeconds % 60;
}, 1000);
