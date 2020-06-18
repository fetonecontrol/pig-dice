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

/*Player.prototype.addScore = function(roll) {
  if (roll === 1) {
    this.turnScore = 0
    let output = player1.totalScore;
    $("#p1TotalScore").text(output);
  } else {
    let addRoll = this.turnScore += roll;
    return addRoll;
  }
}*/

Player.prototype.addScore = function(roll) {
  if (roll === 1) {
    this.turnScore = 0
  } else {
    let addRoll = this.turnScore += roll;
    return addRoll;
  }
}
// Button Logic

// Begin Bussiness Logic for "Hold"
Player.prototype.hold = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
  if (this.totalScore >= 100){
    alert("You Win!");
    this.totalScore = 0;
  }

  return this.totalScore;
}

// Begin UI Logic for "Roll" Button
$(document).ready(function() {
  $("form#p1Roll").submit(function(event) {
    event.preventDefault();
    let roll = playerOneDiceRoll(1, 6);
    player1.addScore(roll);
    console.log(player1);
    let p1TurnScore = player1.turnScore;
    if (roll === 1) {
      $(".player1").hide();
      $(".player2").show();
    }
    $("#p1TurnScore").text(p1TurnScore);
    console.log(player1);

  });

  $("form#p1Hold").submit(function(event) {
    event.preventDefault();
    player1.hold();
    console.log(player1);
    let p1TotalScore = player1.totalScore;
    $("#p1TotalScore").text(p1TotalScore);
    if (player1.totalScore >= 100){
      player1.totalScore = 0;
    }
    $(".player1").hide();
    $(".player2").show();
  });

// Player 2 Roll Button
  $("form#p2Roll").submit(function(event) {
    event.preventDefault();
    let roll = playerOneDiceRoll(1, 6);
    player2.addScore(roll);
    console.log(player2);
    let p2TurnScore = player2.turnScore;
    if (roll === 1) {
      $(".player2").hide();
      $(".player1").show();
    }
    $("#p2TurnScore").text(p2TurnScore);
    console.log(player2);

  });

  $("form#p2Hold").submit(function(event) {
    event.preventDefault();
    player2.hold();
    console.log(player2);
    let p2TotalScore = player2.totalScore;
    $("#p2TotalScore").text(p2TotalScore);
    if (player2.totalScore >= 100){
      player2.totalScore = 0;
    }
    $(".player2").hide();
    $(".player1").show();
  });

});

// Begin UI Logic for "Hold" Button
