function PlayerIndex() {
  this.Index = [];
}

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

Player.prototype.addScore = function(roll) {
  if (roll === 1) {
    player1.turnScore = 0
  } else {
    let addRoll = this.turnScore += roll;
    return addRoll;
  }
}

//let playerIndex = new PlayerIndex();
let playerIndex = new PlayerIndex()

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
    console.log(player1);

  });
  $("form#p1Hold").submit(function(event) {
    event.preventDefault();
    player1.hold();
    console.log(player1);
  });

});

// Begin UI Logic for "Hold" Button
