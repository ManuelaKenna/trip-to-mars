var dailyURL = "";
fetch('https://api.nasa.gov/planetary/apod?api_key=UYBHJ04Q9lLfBjmou4hJQs8ZUPsR0OrRHdvJxaHC')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        dailyURL = data.hdurl;
    })
    .then(function () {
        $("html").css("background", "url(" + dailyURL + ")").css("background-size", "cover");
    })