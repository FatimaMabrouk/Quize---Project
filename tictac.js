
// alert('checked');
$(document).ready(function (){ 

// 
var player1;
var player2;
var turn = 'x';
var checked = false;
var win = [[0,1,2],[3,4,5],[6,7,5],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// $('#turn-x').on('click',function(){
//   turn1 = 'o';
//   turn2 = 'x';

//  $('#turn-x').removeClass('player');
//  $('#turn-o').addClass('player'); 
//  checkPlayer();
// });
// choos you 
$('#player1').one('click', function(e){
  // for x is if its player one
   $('#turn-x').one('click', function(){
    player1 = 'x';
    $('.tic').one('click', function(e){
      $(this).append(player1);
      $(this).off(e);
    })
   })
   // for x is if its player one
  $('#turn-o').one('click', function(){
    player1 = 'o';
    $('.tic').one('click', function(e){
      $(this).append(player2);
      $(this).off(e);
    })
   })


});

// $('#player2').one('click', function(event){
//    $('#turn-x').one('click', function(){
//     player2 = 'x';
//     $('.tic').one('click', function(e){
//       $(this).append(player2);
//       $(this).off(e);
//     })
//    })
//    $('#turn-o').one('click', function(){
//     player2 = 'o';
//     $('.tic').one('click', function (){
//       $(this).append(player2);
//       $('#player2').off(event);

//     })
//    })

// });

 // $('#turn-x').on('click',function(){
 //   computerTurn = 'o';
 //    $('.tic').on('click', function (){
 //    var $toc = $(this).text('x');
 //    $toc.append();
 //    })
  // alert('checked');
 // $('#turn-o').removeClass('player');
 // $('#turn-x').addClass('player'); 

// });
 // $('#turn-o').on('click', function(){
 //  $('.tic').on('click', function (){
 //    var $toc = $(this).text('o');
 //    $toc.append();
 //    })


// function checkPlayer(){
//   if(turn1 === 'o') {
//     $('.tic').on('click', function (){
//     var $toc =  $(this).val('o');
//     $toc.append();
//     })
//     else if(turn1 === 'x') {
//       $('.tic').on('click', function (){
//         $(this).text('x');
//       })
//    } 
//  }

// }
$('#reset').on('click', function(){
  $('.tic').text('');
})


});


  

