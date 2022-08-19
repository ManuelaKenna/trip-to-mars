// create the header for each page
var headerEl = $("#header");

// add title
var titleEl = $("<h1>");
titleEl.text("TRIP TO MARS")

// add subtitle
var subtitleEl = $("<h2>");
subtitleEl.text("GOAL TRACKER");

// append everything to header
headerEl.append(titleEl);
headerEl.append(subtitleEl);


//JS for form
$(document).ready(function() {
    M.updateTextFields();
  });
        
  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elems, options);
    instance.getSelectedValues();
  });
  
  $(document).ready(function(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
 });

  $(document).ready(function(){
    $('select').formSelect();
  });

  var instance = M.FormSelect.getInstances(elem);

  instance.getSelectedValues();
