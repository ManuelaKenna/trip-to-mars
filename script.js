var dailyURL = "";
var backup = "assets/backup.jpg";
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

// Button to give extra info on background image
$( "#btn4" ).click(function() {

  });

// Messing with local storage
$( "#btn1" ).click(function() {
    localStorage.setItem('myCat', 'Tom');
  });
$( "#btn2" ).click(function() {
    localStorage.setItem('myCat', 'Bob');
  });
$( "#btn3" ).click(function() {
    var myCatName = localStorage.getItem('myCat');
    alert( myCatName);
  });