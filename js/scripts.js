$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    const numberInput = $("input#number").val();
    
    $(".color").text(colorInput)

    event.preventDefault();
  });
});