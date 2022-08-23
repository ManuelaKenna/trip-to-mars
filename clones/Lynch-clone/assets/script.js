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
let modelData = "";
//Starship API call//
const p = document.getElementById("output");
var starShip = "https://swapi.dev/api/starships/";

var starData = "";

async function fetchStartship(modelNumber) {
  await fetch(starShip + modelNumber)
    .then(function (response) {

      return response.json();
    })

    // star destroyer = 3 , MF = 4 , Executor = 8

    //manipulates the dom and adds text content to HTML//
    .then(function (wookie) {
      console.log(wookie);
      let {model} = wookie;
      modelData = model;
      console.log(modelData);
      return modelData;

    });
  
}

async function displayStarship() {
  document.getElementById("output").innerHTML = "";
  var starshipEl = document.getElementsByTagName('input');
  console.log(starshipEl);


  for (i = 0; i < starshipEl.length; i++) {

    if (starshipEl[i].type = "radio") {
      // console.log(starshipEl[i].value)

      if (starshipEl[i].checked === true){
      // console.log(starshipEl[i].value)
      //   console.log(starshipEl[i].checked === true)
      switch (starshipEl[i].value) {
        case "Star-Destroyer":
          console.log("SD")
          await fetchStartship(3);
          break;

        case "Millennium-Falcon":
          console.log("MF")
          await fetchStartship(11);
          break;

        case "Executor":
          console.log("E")
          await fetchStartship(15);
          break;

        default:
          return
          break;
      }
      // fetchStartship();
      const starship = starshipEl[i].value
      console.log(modelData)
      await model(starship, modelData)
      
      
    }

    }
  }
}

const model = async (param1, param2) => {
  p.innerHTML = `You Selected: ${param1} Model: ${param2}`;
}
