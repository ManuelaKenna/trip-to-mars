var modelShip = "";

//Starship API call//
var starShip= "https://swapi.dev/api/starships";

var starData = "";

fetch(starShip)
.then (function(response){

    return response.json();
})
//manipulates the dom and adds text content to HTML//
.then(function(wookie){
    console.log(wookie);
    modelShip = wookie.results[0].name.model;
    console.log(modelShip);
  
    
});


// const starshipBtn = document.querySelector("#submitShipBtn");

function displayStarship() {
  document.getElementById("output").innerHTML = "";
  var starshipEl = document.getElementsByTagName('input');
    
  for(i = 0; i < starshipEl.length; i++) {
        
      if(starshipEl[i].type="radio") {
        
          if(starshipEl[i].checked)
              document.getElementById("output").innerHTML
                      += starshipEl[i].name + " Value: "
                      + modelShip[i].value + "<br>" ;
      }
  }
}