const starshipBtn = document.querySelector("#submitShipBtn");

const starRadioBtns = document.querySelectorAll('input[name="goalship"]');

starRadioBtns.addEventListener("click", () => {
  console.log("hello")
  let selectedShip;

  for(const radioButton of starRadioBtns) {

    if (radioButton.checked) {
      selectedShip = radioButton.value;
      break;
    }
  }

});


btn.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          selectedSize = radioButton.value;
          break;
      }
  }
  // //show the output
  // output.innerText = selectedShip ? `you selected ${selectedShip}`:


// var modelShip = document.querySelector ("#star-destroyer");

// //Starship API call//
// var starShip= "https://swapi.dev/api/starships";

// var starData = "";

// fetch(starShip)
// .then (function(response){

//     return response.json();
// })
// //manipulates the dom and adds text content to HTML
// .then(function(wookie){
//     console.log(wookie);
//     starData = wookie.results[0].name;
//     console.log(starData);
  
    
// });
