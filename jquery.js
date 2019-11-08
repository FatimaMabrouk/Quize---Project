// check 
function valition(){

var userName = $('#name').val();
var passWord = $('#pass').val();

if(typeof userName === 'number'){
   $('#nameError').html('Name must be string');
}
if(userName === ''){
	$('#nameError').html('Please inter your email');
}
if( passWord < 8 && !passWord.includes('')){
  $('#passError').html('Your passWord should be more than 8');	
}

}