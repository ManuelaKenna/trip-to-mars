// $(document).ready(function () {
//   $("#starShipBtn").submit(function (event) {
//       selectStarShip(event);

//   });
// });

// function selectStarShip(event) {
//   console.log(document.getElementById("starShipBtn").value)
//   const requestUrl = `https://swapi.dev/api/starships/direct?i=${document.getElementById("starShipBtn").value}`
// }

// fetch(requestUrl)
//     .then(function(response){
//       //Converts to JSON
//       console.log(response)
//       return response.json();

//     })
    
//     .then(function(results){
//       console.log(results);
//           fetch (`https://swapi.dev/api/starships/onecall?model=${results[0].name.model}`)
//                 .then(function(modelData) {
//                     //converts to JSON 
//                     console.log(modelData)
//                     return modelData.json();
//                 })
//     })
var modelData = "";
//Starship API call//
var starShip = "https://swapi.dev/api/starships/";

var starData = "";

function fetchStartship(modelNumber) {
  fetch(starShip)
  .then (function(response){

      return response.json();
  })

  // star destroyer = 1 , MF = 4 , Executor = 8

  //manipulates the dom and adds text content to HTML//
  .then(function(wookie){
      console.log(wookie);
      modelData = wookie.results[modelNumber].model;
      console.log(modelData);
    
      
  });
  }
fetchStartship(4);

function displayStarship() {
  document.getElementById("output").innerHTML = "";
  var starshipEl = document.getElementsByTagName('input');
  console.log(starshipEl);
    
  for(i = 0; i < starshipEl.length; i++) {
        
      if(starshipEl[i].type="radio") {
        console.log(starshipEl[i])
        
          if(starshipEl[i].checked)
              document.getElementById("output").innerHTML
                      += "You Selected: "+ starshipEl[i].value + " Model: "+ modelData;

              // if(starshipEl[i].unchecked)

      }
  }
}

// + " Model: "+ modelData