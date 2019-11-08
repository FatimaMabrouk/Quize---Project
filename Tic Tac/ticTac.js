
// 
var turn1 = 'x';
var turn2 = 'o';
var check = [];

$('#turn-x').on('click',function(){
  turn1 = 'o';
  turn2 = 'x';

 $('#turn-x').removeClass('player');
 $('#turn-o').addClass('player'); 

});

$('#turn-o').on('click',function(){
  turn1 = 'x';
  turn2 = 'o';

 $('#turn-o').removeClass('player');
 $('#turn-x').addClass('player'); 

});

function checkPlayer(){
  if(turn1 === 'o') {
  	$('.tic').on('click', function (){
  		$(this).val('o').append();
  	})
  	else if(turn1 === 'x') {
  		$('.tic').on('click', function (){
  			$(this).text('x');
  		})
  	}
  }