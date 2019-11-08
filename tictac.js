
// alert('checked');
$(document).ready(function (){ 

// 
var turn = 'x';
var computerTurn = 'o';
var checked = false;

// $('#turn-x').on('click',function(){
//   turn1 = 'o';
//   turn2 = 'x';

//  $('#turn-x').removeClass('player');
//  $('#turn-o').addClass('player'); 
//  checkPlayer();
// });
// choos you 
 $('#turn-x').on('click',function(){
   computerTurn = 'o';
    $('.tic').on('click', function (){
    var $toc = $(this).text('x');
    $toc.append();
    })
  // alert('checked');
 // $('#turn-o').removeClass('player');
 // $('#turn-x').addClass('player'); 

});
 $('#turn-o').on('click', function(){
  computerTurn = 'x';
  formData.append($('#one'), computerTurn);
  $('.tic').on('click', function (){
    var $toc = $(this).text('o');
    $toc.append();
    })
 })

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


  

