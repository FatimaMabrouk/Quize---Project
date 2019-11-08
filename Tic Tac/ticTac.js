alert('checked');
$(document).ready(function (){ 

// 
var turn1 = 'x';
var turn2 = 'o';
var check = [];

// $('#turn-x').on('click',function(){
//   turn1 = 'o';
//   turn2 = 'x';

//  $('#turn-x').removeClass('player');
//  $('#turn-o').addClass('player'); 
//  checkPlayer();
// });

 $('.tic').on('click',function(){
    // $('#one').on('click', function (){
    // var $toc = $('#one').text('o');
    // $toc.append('#one');
    // })
  alert('checked');
 // $('#turn-o').removeClass('player');
 // $('#turn-x').addClass('player'); 

});

function checkPlayer(){
  if(turn1 === 'o') {
    $('.tic').on('click', function (){
    var $toc =  $(this).val('o');
    $toc.append();
    })
    else if(turn1 === 'x') {
      $('.tic').on('click', function (){
        $(this).text('x');
      })
   } 
 }

}


});


  

