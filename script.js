var marsRover = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=VhGF4oG4wpJUYh3HbloQTEk7cSGvBjnVclWVf5Dq"

fetch(marsRover)
.then (function(response){

    return response.json();
})

.then(function(data){
    console.log(data.photos[0].img_src);

    
})