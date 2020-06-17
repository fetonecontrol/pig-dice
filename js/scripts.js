// Begin Bussiness Logic for "Roll"
function playerOneDiceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Begin Bussiness Logic for "Hold"


// Begin UI Logic for "Roll" Button
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    let roll = playerOneDiceRoll(1, 6);

  })
})

// Begin UI Logic for "Hold" Button
