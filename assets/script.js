


//Starship API call//
var starShip= "https://swapi.dev/api/starships";

var starData = "";

fetch(starShip)
.then (function(response){

    return response.json();
})
//manipulates the dom and adds text content to HTML
.then(function(wookie){
    console.log(wookie);
    starData = wookie.results[0].name;
    console.log(starData);
    const options = document.getElementById('browsers')
    console.log(options)
    $(`#browsers`).children([0]).text(starData);
});

// //manipulates the dom and adds text content to HTML
// .then(function (results) {
//   console.log(results);
//   // document.querySelector(".spaceShip").innerHTML = results.name.model;

// })

//When a user completes a goal we need a get element by ID function to pull in the gif and add it to a container. 
// function appendCongrats(){
//   var txt1 = "<p>Text.</p>"
//   var txt2 = $("<p></p>").text("Text.");
//   var txt3 = document.createElement("p");
//   txt3.innerHTML ="Text."

//  $(".congrats-page").append(txt1,txt2,txt3);

// }
//text 1: Congrats User you reached your goal!

