// Begin Bussiness Logic for "Roll"
function playerOneDiceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}


// Business Logic For Players
function Player(pname, turnScore, totalScore) {
  this.pname = pname;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

let player1 = new Player("player1", 0, 0);
let player2 = new Player("player2", 0, 0);

Player.prototype.addScore = function(roll) {
  if (roll === 1) {
    this.turnScore = 0
    $(".player1").hide();
    $(".player2").show();
    let output = player1.totalScore;
    $("#p1TotalScore").text(output);
  } else {
    let addRoll = this.turnScore += roll;
    return addRoll;
  }
}



// Begin Bussiness Logic for "Hold"
Player.prototype.hold = function() {
  this.totalScore = this.turnScore + this.totalScore;
  if (this.totalScore >= 100){
    alert("You win!");
  }
  return this.totalScore;
}

// Begin UI Logic for "Roll" Button
$(document).ready(function() {
  $("form#p1Roll").submit(function(event) {
    event.preventDefault();
    let roll = playerOneDiceRoll(1, 6);
    player1.addScore(roll);
    console.log(player1.turnScore);
    let p1TurnScore = player1.turnScore;
    $("#p1TurnScore").text(p1TurnScore);
    console.log(player1);

  });

  $("form#p1Hold").submit(function(event) {
    event.preventDefault();
    player1.hold();
    console.log(player1);
    $(".player1").hide();
    $(".player2").show();
    let p1TotalScore = player1.totalScore;
    $("#p1TotalScore").text(p1TotalScore);
  //Need to show turn score for player 1
//need to add functionality for player 2

  });

});

// Begin UI Logic for "Hold" Button
