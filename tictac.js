
// alert('checked');
$(document).ready(function (){ 

var turn='X'

// array to stores values that will check
var turns = ['#','#','#','#','#','#','#','#','#'];

// defult computer
var computersTurn = 'O';

// keep trakes if its computers turn
var gameCon = false;

// change player's turn to x and computers to O
$('#turnX').on('click', function(){
  turn = 'O';
  computersTurn = 'X';
  $('#turnX').removeClass("player");
  $('#turnO').addClass("player");

});


$('#turnO').on('click', function(){
  turn = 'X';
  computersTurn = 'O';
  $('#turnO').removeClass("player");
  $('#turnX').addClass("player");

});

function playerTurn(turn, id) {
  var spotTaken = $('#'+id).text();
  if(spotTaken === "#"){
    turns[id] = turn;
    $('#'+id).text(turn);

  }
}

$(".tic").on('click',function(){
  var slot = $(this).attr('id');
  playerTurn(turn, slot);
});

function reset(){
  turns = turns = ['#','#','#','#','#','#','#','#','#'];
  
  count = 0;
  $(".tic").text("#");
  gameCon = true; 

}


});

















  

