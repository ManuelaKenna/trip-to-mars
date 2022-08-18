//drop down trigger for picking your starship//

//$(".dropdown-trigger").dropdown();

//Starship API call//
var starShip= "https://swapi.dev/api/starships"


fetch(starShip)
.then (function(response){

    return response.json();
})

.then(function(data){
    console.log(data);
    
})
//manipulates the dom and adds text content to HTML
.then(function (results) {
  console.log(results);
  document.querySelector(".spaceShip").innerHTML = results.model;
})

//When a user completes a goal we need a get element by ID function to pull in the gif and add it to a container. 

// $(function(){
//   $('img').each(function(e){
//     var src = $(e).attr('src');
//     $(e).hover(function(){
//       $(this).attr('src', src.replace('.gif', '_anim.gif'));
//     }, function(){
//       $(this).attr('src', src);
//     });
//   });
// })