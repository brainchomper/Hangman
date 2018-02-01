	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var word ;              // Selected word
	var guess ;             // Geuss
	var guesses = [ ];      // Stored geusses
	var wins ;             // wins
	var counter ;           // Count correct geusses
	var space;              // Number of spaces in word '-'

	var showLives = document.getElementById("mylives");

document.onkeyup = function(event) {

	// Determines which key was pressed.
	var guess = event.key;
	console.log(guess)
}


// div id wordHolder
// div id guesses