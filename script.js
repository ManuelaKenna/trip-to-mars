// TODO: Fix Jquery css notations

// Defining Variables
var firstName = "User";
var goalName = "drink 3 cups of water";
var goalTimeline = 10;
var shipType = "";
var currentGoalDay = 1;

// Local Storage Variables
firstName = localStorage.getItem('firstName');
goalName = localStorage.getItem('goalName');
goalTimeline = localStorage.getItem('goalTimeline');
shipType = localStorage.getItem('shipType');

// Background image function
function setBackground() {
  // Declaring/defining variables for background images
  var dailyURL = "";
  var backup = "assets/images/backup.jpg";

  // Set backup stock background
  $("html").css({"background-image":"url(" + backup + ")","height":"100%",
  "object-fit":"cover","width":"100%","background-position":"center","background-repeat":"no-repeat","background-size": "cover"});

  // Fetch APOD background and set to page
  // fetch('https://api.nasa.gov/planetary/apod?api_key=UYBHJ04Q9lLfBjmou4hJQs8ZUPsR0OrRHdvJxaHC')
  //     .then(function (response) {
  //         return response.json();
  //     })
  //     .then(function (data) {
  //         dailyURL = data.hdurl;
  //     })
  //     .then(function () {
  //         $("html").css({"background-image":"url(" + dailyURL + ")","height":"100%",
  //         "object-fit":"cover","width":"100%","background-position":"center","background-repeat":"no-repeat","background-size": "cover"});
  // })

}
setBackground();

// Function that sets on click functions
function setOnClicks () {
  // Getting local variable info from test
  $(`#firstName`).click(function() {
    localStorage.setItem('firstName','John');
    var firstName = localStorage.getItem('firstName');
    console.log(firstName);
    setProgressPage()
  });
  $(`#goalName`).click(function() {
    localStorage.setItem('goalName','drink 5 cups of water per day');
    var goalName = localStorage.getItem('goalName');
    console.log(goalName);
    setProgressPage()
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
  });

  $(`#goalYesNo`).children().click(function() {
    setProgressBar(currentGoalDay);
    setProgressPage();
    if (currentGoalDay > goalTimeline) {
      window.location = "file:///C:/Users/kidsp/UW-Project1/trip-to-mars/finish.html";
      currentGoalDay = 1;
    }
  });
}
setOnClicks();

// Load page function
function setProgressPage() {
  // Clearing page
  $(`#goalTitle`).children([0]).text("");
  $(`#goalQuestion`).children([0]).text("");

  var userName = firstName; // Local Storage
  var goalString = goalName; // Local Storage

  $(`#goalTitle`).children([0]).prepend("Daily Goal of: " + userName);

  $(`#goalQuestion`).children([0]).append("Did you " + goalString + " today?");

}
setProgressPage()

// Progress bar function
function setProgressBar(day) {
  // Declaring/defining variables for progress bar
  var htmlString = "";
  var goalDays = goalTimeline - 1; // Local Storage
  var dayCurrent = day - 1; // Local Storage

  // Clear page
  $(`#timeline`).text("");


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
  $(`#box${dayCurrent}`).append(`<img id="rocketShipImage" src="assets/images/rocketShip.png" />`)
  $(`#box${dayCurrent}`).children().css("height","4rem").css("width","4rem").css("position","absolute").css("top","-5rem").css("left","-1.2rem");

  // Adding Mars at the end
  $(`#timeline`).append(`<img id="MarsImg" src="assets/images/Mars.jpg" />`);
  $(`#MarsImg`).css("height","4rem").css("width","4rem").css("2px","solid grey").css("border-radius","50%");

  // Announcing current goal day
  currentGoalDay++;
}
setProgressBar(1);

