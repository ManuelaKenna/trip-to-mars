// TODO: Fix Jquery css notations

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

// Adding text to body
var userName = "Justin";
var goalString = "drink 5 glasses of water";

$(`#goalTitle`).children([0]).prepend("Daily Goal of: " + userName);

$(`#goalQuestion`).children([0]).append("Did you " + goalString + " today?");



// Declaring/defining variables for progress bar
var htmlString = "";
var goalDays = 8; // Change to local storage from previous
var dayCurrent = 6; // Change to local storage from previous

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




// Messing with local variable

// // Button to give extra info on background image
// $( "#btn4" ).click(function() {

//   });

// // Messing with local storage
// $( "#btn1" ).click(function() {
//     localStorage.setItem('myCat', 'Tom');
//   });
// $( "#btn2" ).click(function() {
//     localStorage.setItem('myCat', 'Bob');
//   });
// $( "#btn3" ).click(function() {
//     var myCatName = localStorage.getItem('myCat');
//     alert( myCatName);
//   });