
// alert('checked');
$(document).ready(function (){ 

var turn='X';

// array to stores values that will check
var turns = ['#','#','#','#','#','#','#','#','#'];

// defult computer
var computersTurn = 'O';

// keep trakes if its computers turn
var gameCon = false;
// keep track computers game
var count= 0;

// change player's turn to x and computers to O
$('#turnX').on('click', function(){
  turn = 'O';
  computersTurn = 'X';
  $('#turnX').removeClass("player");
  $('#turnO').addClass("player");
  reset();
});


$('#turnO').on('click', function(){
  turn = 'X';
  computersTurn = 'O';
  $('#turnO').removeClass("player first");
  $('#turnX').addClass("player seconde");
   reset();

});
 

function computersTurn(){

  var  taken= false;
    while(taken===false && count !==5){
    var computerMove = (Math.random()*10).toFixed();
    var  move = $('#'+computerMove).text();
   if(move ==="#") {
      $("#"+computersTurn).text(computersTurn);
       taken = true;
       turns[computersMove] = computersTurn;
   }

  }

  }


/////////// turn ////////////

function playerTurn(turn, id) {
  var spotTaken = $('#'+id).text();
  if(spotTaken === "#"){
    count++;
    turns[id] = turn;
    $('#'+id).text(turn);
      
     winCondition(turns, turn); 
   }
     if(gameCon === false){
      computersTurn();
      winCondition(turns, computersTurn);
     }
}

// ///
function winCondition(turnArray, currentTurn) {
  // 1
  if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
     gameCon = true;
     reset();
     alert("player" + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
    }
  // 2
  else if(turnArray[2]=== currentTurn && turnArray[4] === currentTurn && turnArray[6]=== currentTurn ){
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 2,4, and 6 spots)" );
  }
  // 3 
  else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 0,3, and 6 spots)" );
  }
   // 4
   else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 0,4, and 8 spots)" );
  }

    else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
          gameCon = true;
          reset();
          alert("player" + currentTurn + " wins! (Top row across 1,4 and 7 spots)");
  }

    else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 6,7, and 8 spots)");
    }
    else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 3,4, and 5 spots)" );
  }  else if(turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameCon = true;
      reset();
      alert("player" + currentTurn + " wins! (Top row across 4,3, and 8 spots)" );
  }


  else {
  gameCon = false;
} 
}


$(".tic").on('click',function(){
  var slot = $(this).attr('id');
  playerTurn(turn, slot);
});


/////////. Reset Function //// 
function reset(){
  turns =  ['#','#','#','#','#','#','#','#','#'];
  count = 0;
   // 
  $(".tic").text("#");
   gameCon = true; 
}

});

















  

