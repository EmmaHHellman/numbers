
$(document).ready(function() {
  $("form#enternumber").submit(function(event) {
  

  // Business logic

  const beep = "beep",
  boop = "boop",
  beneighbor = "Won't you be my neighbor?";

  var numberArray = function(num) {
    const numberInput = [];
    for(i = 0; i <= num; i++) {
      numberInput.push(i.toString());
    }

for (i = 0; i < numberInput.length; i++) {
    if (numberInput[i].includes("3")){
      return beneighbor
    } else if (numberInput[i].includes("2"))  {
      return boop
    } else if (numberInput[i].includes("1")) {
      return beep
    } else {
      return number
    }
  };

  return message;
}
// UI logic 
  const digitInput = $("input#number").val();
  event.preventDefault();
  const covertedNumber = numberArray(digitInput);
  $("#output").text(covertedNumber)

  });
});

