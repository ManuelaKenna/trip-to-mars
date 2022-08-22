// TODO: Fix Jquery css notations

// Background image function
function setBackground() {
  // Declaring/defining variables for background images
  var dailyURL = "";
  var backup = "assets/images/backup.jpg";

  // Set backup stock background
  $("html").css({"background-image":"url(" + backup + ")","height":"100%",
  "object-fit":"cover","width":"100%","background-position":"center","background-repeat":"no-repeat","background-size": "cover"});

  // Fetch APOD background and set to page
  fetch('https://api.nasa.gov/planetary/apod?api_key=UYBHJ04Q9lLfBjmou4hJQs8ZUPsR0OrRHdvJxaHC')
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          dailyURL = data.hdurl;
      })
      .then(function () {
          $("html").css({"background-image":"url(" + dailyURL + ")","height":"100%",
          "object-fit":"cover","width":"100%","background-position":"center","background-repeat":"no-repeat","background-size": "cover"});
  })

}
setBackground();

// Function that set on click functions
function setOnClicks () {
  // Getting local variable info from test
  $(`#firstName`).click(function() {
    localStorage.setItem('firstName','John');
    var firstName = localStorage.getItem('firstName');
    console.log(firstName);
  });
  $(`#goalName`).click(function() {
    localStorage.setItem('goalName','drink 5 cups of water per day');
    var goalName = localStorage.getItem('goalName');
    console.log(goalName);
  });
  $(`#goalTimeline`).click(function() {
    localStorage.setItem('goalTimeline','6');
    var goalTimeline = localStorage.getItem('goalTimeline');
    console.log(goalTimeline);
  });
  $(`#shipType`).click(function() {
    localStorage.setItem('shipType','cruiser');
    var shipType = localStorage.getItem('shipType');
    console.log(shipType);
  });
  $(`#swapHTML`).click(function() {
    window.location = "file:///C:/Users/kidsp/UW-Project1/trip-to-mars/index.html"
    setProgressPage();
    setProgressBar();
  });

  $(`#goalYesNo`).children().click(function() {

    setProgressPage();
    setProgressBar();
  });
}
setOnClicks();

// Load page function
function setProgressPage() {
  var userName = "Justin"; // Local Storage
  var goalString = "drink 5 cups of water"; // Local Storage

  $(`#goalTitle`).children([0]).prepend("Daily Goal of: " + userName);

  $(`#goalQuestion`).children([0]).append("Did you " + goalString + " today?");
}

// Progress bar function
function setProgressBar() {
  // Declaring/defining variables for progress bar
  var htmlString = "";
  var goalDays = 6; // Local Storage
  var dayCurrent = 2; // Local Storage

  // Adding Earth at the beginning
  $(`#timeline`).append(`<img id="EarthImg" src="assets/images/Earth.jpg" />`);
  $(`#EarthImg`).css("height","4rem").css("width","4rem").css("2px","solid grey").css("border-radius","50%");

  // Creating for loop to make progress bar based on amount of goals days
  for (let c = 0; c < goalDays; c++) {
    htmlString += `<div class="square" id="box${c}">&nbsp;</div>`;
  }

  // Adding htmlstring that has all the divs into timeline id
  $(`#timeline`).append(htmlString);

  // For loop to go over each day before current day and fill circle
  for (let c = 0; c < dayCurrent; c++) {
    $(`#box${c}`).css("background-color","black");
    
  }

  // Adding Rover picture over current day
  $(`#box${dayCurrent}`).append(`<img id="roverImg" src="assets/images/rover.png" />`)
  $(`#box${dayCurrent}`).children().css("height","4rem").css("width","4rem").css("position","absolute").css("top","-5rem").css("left","-1.2rem");

  // Adding Mars at the end
  $(`#timeline`).append(`<img id="MarsImg" src="assets/images/Mars.jpg" />`);
  $(`#MarsImg`).css("height","4rem").css("width","4rem").css("2px","solid grey").css("border-radius","50%");

}

