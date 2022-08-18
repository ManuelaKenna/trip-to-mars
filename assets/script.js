//drop down trigger for picking your starship//

document.addEventListener('DOMContentLoaded',function(){
  var drop = document.querySelectorAll(".dropdown-trigger")
  M.Dropdown.init(drop,{
    coverTrigger:false,
    closeOnClick:false,
    hover:true,
    inDuration:400

  })

  
})

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
  document.querySelector(".spaceShip").innerHTML = results[0].name.model;

})

//When a user completes a goal we need a get element by ID function to pull in the gif and add it to a container. 
function appendCongrats(){
  var txt1 = "<p>Text.</p>"
  var txt2 = $("<p></p>").text("Text.");
  var txt3 = document.createElement("p");
  txt3.innerHTML ="Text."

 $(".congrats-page").append(txt1,txt2,txt3);

}

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