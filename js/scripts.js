function rollDice() {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var result =
  }

  this.playerOne = function(rollDice){
    this.resultOne += rollDice
  }

  this.playerTwo = function(rollDice){
    this.resultTwo +=rollDice
  }



  $(document).getElementById("result"(){
    $("form#diceGame").submit(function(){
      event.preventDefault();
      var die1 = Math.floor(Math.random() * 6) + 1;
      var die2 = Math.floor(Math.random() * 6) + 1;
      var playerOneTotal = d1;
      var playerTwoTotal = d2;
      $("#resultOne").text(this.resultOne);
      $("#resultTwo").text(this.resultTwo);

    });
  });
