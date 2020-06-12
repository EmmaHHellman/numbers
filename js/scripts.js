
$(document).ready(function() {
  $("form#enternumber").submit(function(event) {
  
  // Business logic
  const beep = "beep",
  boop = "boop",
  beneighbor = "Won't you be my neighbor?";

  var numberArray = function(num) {
    const numberInput = [];
    for (i = 0; i <= num; i++) {
      numberInput.push(i.toString());
    }

    const numberOutput = [];

    numberInput.forEach(function(number) { 
      if (number.includes("3")){
        numberOutput.push(beneighbor)
        console.log(numberOutput)
        return beneighbor
      } else if (number.includes("2"))  {
        numberOutput.push(boop)
        console.log(numberOutput)
      } else if (number.includes("1")) {
        numberOutput.push(beep)
        console.log(numberOutput)
      } else {
        numberOutput.push(number)
      }
    });
  
}
// UI logic 
  const digitInput = $("input#number").val();
  event.preventDefault();
  const covertedNumber = numberArray(digitInput);
  
  $("#output").text(numberLoop);

  });
});

