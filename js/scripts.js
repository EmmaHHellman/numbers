
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

    console.log(numberInput)

for (i = 0; i < numberInput.length; i++) {
    if (digitInput.includes("3")){
      console.log(numberInput)
      return beneighbor
    } else if (digitInput.includes("2"))  {
      console.log(numberInput)
      return boop
    } else if (digitInput.includes("1")) {
      console.log(numberInput)
      return beep
    } else {
      return "number"
    }
  };
  
}
// UI logic 
  const digitInput = $("input#number").val();
  event.preventDefault();
  const covertedNumber = numberArray(digitInput);
  
  $("#output").text(covertedNumber);

  });
});

