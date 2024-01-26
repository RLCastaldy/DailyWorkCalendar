document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedNine = localStorage.getItem('9-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedNine) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-9').textContent = storedNine;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedTen = localStorage.getItem('10-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedTen) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-10').textContent = storedTen;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedEleven = localStorage.getItem('11-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedEleven) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-11').textContent = storedEleven;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedTwelve = localStorage.getItem('12-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedTwelve) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-12').textContent = storedTwelve;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedOne = localStorage.getItem('1-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedOne) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-1').textContent = storedOne;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedTwo = localStorage.getItem('2-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedTwo) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-2').textContent = storedTwo;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedThree = localStorage.getItem('3-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedThree) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-3').textContent = storedThree;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedFour = localStorage.getItem('4-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedFour) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-4').textContent = storedFour;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored text from local storage
  var storedFive = localStorage.getItem('5-To-Do');

  // Check if the retrieved text is not null or empty
  if (storedFive) {
    // Update the content of the HTML element with ID "displayText"
    document.getElementById('text-5').textContent = storedFive;
  }
});

const todayDate = document.querySelector('currentDay');
const currentHour = new Date().getHours();
console.log(currentHour);
// Create a seperate Date object
const onlyDate = new Date();
onlyDate.setHours(0, 0, 0, 0); // Set the time to midnight
const formattedDate = onlyDate.toLocaleDateString();
console.log(formattedDate);//removes time from date
document.getElementById("currentDay").innerHTML = formattedDate;//displays date on page

//function for chaning styling depending on time repeated for each hour
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

  const nineBtn = document.getElementById('btn-9');
  const nineText = document.getElementById("text-9");

  nineBtn.addEventListener("click", (event) => {
   const textNine=nineText.value;
    console.log(textNine);
  localStorage.setItem('9-To-Do', textNine);
  });

  const tenBtn = document.getElementById('btn-10');
  const tenText = document.getElementById("text-10");

  tenBtn.addEventListener("click", (event) => {
   const textTen=tenText.value;
    console.log(textTen);
  localStorage.setItem('10-To-Do', textTen);
  });

  const elevenBtn = document.getElementById('btn-11');
  const elevenText = document.getElementById("text-11");

  elevenBtn.addEventListener("click", (event) => {
   const textEleven=elevenText.value;
    console.log(textEleven);
  localStorage.setItem('11-To-Do', textEleven);
  });

  const twelveBtn = document.getElementById('btn-12');
  const twelveText = document.getElementById("text-12");

  twelveBtn.addEventListener("click", (event) => {
    const textTwelve=twelveText.value;
     console.log(textTwelve);
   localStorage.setItem('12-To-Do', textTwelve);
   });

   const oneBtn = document.getElementById('btn-1');
  const oneText = document.getElementById("text-1");

  oneBtn.addEventListener("click", (event) => {
    const textOne=oneText.value;
     console.log(textOne);
   localStorage.setItem('1-To-Do', textOne);
   });

   const twoBtn = document.getElementById('btn-2');
  const twoText = document.getElementById("text-2");

  twoBtn.addEventListener("click", (event) => {
    const textTwo=twoText.value;
     console.log(textTwo);
   localStorage.setItem('2-To-Do', textTwo);
   });

   const threeBtn = document.getElementById('btn-3');
  const threeText = document.getElementById("text-3");

  threeBtn.addEventListener("click", (event) => {
    const textThree=threeText.value;
     console.log(textThree);
   localStorage.setItem('3-To-Do', textThree);
   });

   const fourBtn = document.getElementById('btn-4');
  const fourText = document.getElementById("text-4");

  fourBtn.addEventListener("click", (event) => {
    const textFour=fourText.value;
     console.log(textFour);
   localStorage.setItem('4-To-Do', textFour);
   });

   const fiveBtn = document.getElementById('btn-5');
  const fiveText = document.getElementById("text-5");

  fiveBtn.addEventListener("click", (event) => {
    const textFive=fiveText.value;
     console.log(textFive);
   localStorage.setItem('5-To-Do', textFive);
   });