// $(document).ready(function() {
//     updateTextFields('.goals');
//   });
        
  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    console.log(elems)
    var instance = M.FormSelect.init(elems, options);
    instance.getSelectedValues();
  });
  

  $(document).ready(function(){
    $('select').formSelect();
  });

  var instance = M.FormSelect.getInstances(elem);

  instance.getSelectedValues();
  function handleform(event){
    event.preventDefault()
    // get first name
    //get goal name
    //get days
    // create object
    //save to local storage
    var firstName = document.querySelector("#first_name").value
    var goalName = document.querySelector("#goal_name").value
    var range = document.querySelector("#range").value
    console.log(firstName,goalName,range)
}

  document.querySelector("#goals").addEventListener("#action",handleform)

  function displayRadioValue() {
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value;
    }
}
 