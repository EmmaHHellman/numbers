// UI logic 
$(document).ready(function() {
  $("form#enternumber").submit(function(event) {
    const digitInput = $("input#number").val();

    event.preventDefault();

  // Business logic

  const beep = "beep",
  boop = "boop",
  neighbor = "Won't you be my neighbor?";

  var numberArray = function(num) {
    const numberInput = [];
    for(i = 0; i <= num; i++) {
      numberInput.push(i);
    }

  var message = numberInput.forEach(function(number) {
    if (number.includes(3)){
      return neighbor
    } else if (number.includes(2))  {
      return boop
    } else if (number.includes(1)) {
      return beep
    } else {
      return number
    }
  });

  return message;
}
  const covertedNumber = numberArray(digitInput);
  $("#output").text(covertedNumber)

  });
});

