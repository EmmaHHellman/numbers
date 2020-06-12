$(document).ready(function() {
  $("form#enternumber").submit(function(event) {

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
          displayArray(numberOutput)
        } else if (number.includes("2"))  {
          numberOutput.push(boop)
          displayArray(numberOutput)
          $("#arrayoutput").text(numberOutput)
        } else if (number.includes("1")) {
          numberOutput.push(beep)
          displayArray(numberOutput)
          $("#arrayoutput").text(numberOutput)
        } else {
          numberOutput.push(number)
          displayArray(numberOutput)
        }
      });
    }
    
  // UI logic 
    const digitInput = $("input#number").val();
    numberArray(digitInput);
  
    function displayArray(num) {
      const dividedNum = num;
      $("#arrayoutput").text(dividedNum);
    }

    event.preventDefault();
  
  });
});

