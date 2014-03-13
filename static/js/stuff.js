alert('Welcome to the Bag of Tricks!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
	alert ('Hello World!')
  // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
	$('#houdini_text').hide()
  //WRITE CODE HERE
});

$('#reappear').click(function() {
	$('#houdini_text').show()
  //WRITE CODE HERE
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink').click(function() {
	$('#tickled_text').css('color', 'red');
});


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet').click(function() {
	alert ("Hello" + $('#my_name').val() + "!");	
});