 // Business logic
 var numberArray = function(num) {
  const numberInput = [];
  for (i = 0; i <= num; i++) {
    numberInput.push(i.toString());
  }

  const beep = "beep",
  boop = "boop",
  beneighbor = "Won't you be my neighbor?",
  numberOutput = [];

  numberInput.forEach(function(number) {
    if (number.includes("3")){
      numberOutput.push(beneighbor)
    } else if (number.includes("2"))  {
      numberOutput.push(boop)
    } else if (number.includes("1")) {
      numberOutput.push(beep)
    } else {
      numberOutput.push(number)
    }
  });
  
  const output = numberOutput;
  $("#arrayoutput").text(output);
  
}

$(document).ready(function() {
  $("form#enternumber").submit(function(event) {

  // UI logic 
    const digitInput = $("input#number").val();
    numberArray(digitInput);
  
    event.preventDefault();
  
  });
});