// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const todayDate = document.querySelector('currentDay');
const currentHour = new Date().getHours();
console.log(currentHour);
// Create a seperate Date object
const onlyDate = new Date();
onlyDate.setHours(0, 0, 0, 0); // Set the time to midnight
const formattedDate = onlyDate.toLocaleDateString();
console.log(formattedDate);//removes time from date
document.getElementById("currentDay").innerHTML = formattedDate;//displays date on page

// const nineAm = document.querySelector('hour-9');

if (currentHour >= 9 && currentHour < 10) {
    document.getElementById('hour-9').className = "row time-block present";
  } else if (currentHour >= 10 && currentHour < 24) {
    document.getElementById('hour-9').className = "row time-block past";
  };

  if (currentHour >= 10 && currentHour < 11) {
    document.getElementById('hour-10').className = "row time-block present";
  } else if (currentHour >= 11 && currentHour < 24) {
    document.getElementById('hour-10').className = "row time-block past";
  };

  if (currentHour >= 11 && currentHour < 12) {
    document.getElementById('hour-11').className = "row time-block present";
  } else if (currentHour >= 12 && currentHour < 24) {
    document.getElementById('hour-11').className = "row time-block past";
  };

  if (currentHour >= 12 && currentHour < 13) {
    document.getElementById('hour-12').className = "row time-block present";
  } else if (currentHour >= 13 && currentHour < 24) {
    document.getElementById('hour-12').className = "row time-block past";
  };

  if (currentHour >= 13 && currentHour < 14) {
    document.getElementById('hour-1').className = "row time-block present";
  } else if (currentHour >= 14 && currentHour < 24) {
    document.getElementById('hour-1').className = "row time-block past";
  };

  if (currentHour >= 14 && currentHour < 15) {
    document.getElementById('hour-2').className = "row time-block present";
  } else if (currentHour >= 15 && currentHour < 24) {
    document.getElementById('hour-2').className = "row time-block past";
  };

  if (currentHour >= 15 && currentHour < 16) {
    document.getElementById('hour-3').className = "row time-block present";
  } else if (currentHour >= 16 && currentHour < 24) {
    document.getElementById('hour-3').className = "row time-block past";
  };

  if (currentHour >= 16 && currentHour < 17) {
    document.getElementById('hour-4').className = "row time-block present";
  } else if (currentHour >= 17 && currentHour < 24) {
    document.getElementById('hour-4').className = "row time-block past";
  };

  if (currentHour >= 17 && currentHour < 18) {
    document.getElementById('hour-5').className = "row time-block present";
  } else if (currentHour >= 18 && currentHour < 24) {
    document.getElementById('hour-5').className = "row time-block past";
  };



$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  });