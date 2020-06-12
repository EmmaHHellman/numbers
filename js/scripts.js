// UI logic 
$(document).ready(function() {
  $("form#enternumber").submit(function(event) {
    const numberInput = $("input#number").val();

    event.preventDefault();

  // Business logic
  function convertNumber(numberInput) {

    var numberoutput = [];
    for (var i = 0; i < numberInput.length; i++) {
      if(numberInput[i].includes(3)) {
        console.log(numberInput)
        if (numberInput[i].includes(2)) {
          console.log("two!")
          if (numberInput[i].includes(1)) {
            console.log("one!")
            return "Beep!";
          }
          return "Boop!";
        }
        return "Won't you be my neighbor?"
      } else if (numberInput[i].includes(2)) {
        console.log("two!")
        if (numberInput[i].includes(1)) {
          console.log("one!")
          return "Beep!";
        }
        return "Boop!";
      } else if (numberInput[i].includes(1)) {
        return "Beep!";
      }
      const arrayOutput = numberoutput.push(i);
      console.log(arrayOutput);
  }

}
  const covertedNumber = convertNumber(numberInput);
  $("#output").text(covertedNumber)

  });
});