// Declaring/defining variables for background images
var dailyURL = "";
var backup = "assets/images/backup.jpg";
// Stock background
$("html").css("background-image", "url(" + backup + ")").css("height", "100%").css("background-position", "center").css("background-repeat", "no-repeat").css("background-size", "cover");
// Fetch APOD background
fetch('https://api.nasa.gov/planetary/apod?api_key=UYBHJ04Q9lLfBjmou4hJQs8ZUPsR0OrRHdvJxaHC')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        dailyURL = data.hdurl;
    })
    .then(function () {
        $("html").css("background-image", "url(" + dailyURL + ")").css("height", "100%").css("background-position", "center").css("background-repeat", "no-repeat").css("background-size", "cover");
})



var htmlString = "";
var goalDays = 5; // Local storage from previous
var dayCurrent = 4; // Local storage from previous

// Adding Earth at the beginning
$(`#timeline`).append(`<img id="EarthImg" src="assets/images/Earth.jpg" />`);
$('#timeline').children([1]).css("height","4rem").css("width","4rem").css("2px","solid grey").css("border-radius","50%");

// Creating for loop to make progress bar based on amount of goals days
for (let c = 0; c < goalDays; c++) {
  htmlString += `<div class="square" id="box${c}">&nbsp;</div>`;
}

// Adding htmlstring that has all the divs into timeline id
$(`#timeline`).append(htmlString);

// Adding filled to all boxes before current day


// Ask about this box # string literal  $('#box${dayCurrent}').append(`<img id="roverImg" src="assets/images/rover.png" />`)
// Adding Rover picture over current day
$(`#box${dayCurrent}`).append(`<img id="roverImg" src="assets/images/rover.png" />`)
$(`#box${dayCurrent}`).children().css("height","4rem").css("width","4rem").css("position","absolute").css("top","-5rem").css("left","0rem");




// Adding Mars at the end
$(`#timeline`).append(`<img id="MarsImg" src="assets/images/Mars.jpg" />`);
$('#timeline').children([1]).css("height","4rem").css("width","4rem").css("2px","solid grey").css("border-radius","50%");






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