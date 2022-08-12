fetch('https://api.nasa.gov/planetary/apod?api_key=UYBHJ04Q9lLfBjmou4hJQs8ZUPsR0OrRHdvJxaHC')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        dailyURL = data.hdurl;
        console.log(dailyURL);
    })