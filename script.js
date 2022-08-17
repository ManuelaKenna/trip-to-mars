var dailyURL = "";
var backup = "backup.jpg";
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

