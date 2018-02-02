var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ['dog', 'tree', 'swing', 'around', 'scientist'];
var word;              // Selected word
var guess;             // Geuss
var guesses = [];      // Stored geusses
var wins;             // wins
var counter;           // Count correct geusses
var space;              // Number of spaces in word '-'

var showLives = document.getElementById("mylives");

var word = words[Math.floor(Math.random() * words.length)];
console.log (word)
//document.getElementById("word").innerHTML = word;

//pushes to guesses field
//guesses.push(guess);
//document.getElementById("used").innerHTML = guesses;


function $(id) { return document.getElementById(id) };

var maskedword = word.replace(/./g, function (str) {
	return "<span>" + ((str == " ") ? " " : " _ ") + "</span>";
});
$("word").innerHTML = maskedword;
var placeholder = $("word").getElementsByTagName("span");
//console.log(placeholder);

function insertkey(pos, key) {
	placeholder[pos].innerHTML = key;
}

document.onkeyup = function (e) {
	// var whichkey = String.fromCharCode(e.keyCode);
	var whichkey = e.key;
	var keypos = word.toLowerCase().indexOf(whichkey);
	if (keypos > -1){
		// to do
	}
	else{
		guesses.push(whichkey);
		document.getElementById("used").innerHTML = guesses;

		console.log (whichkey)
	}
	while (keypos != -1) {
		insertkey(keypos, whichkey);
		keypos = word.toUpperCase().indexOf(whichkey, keypos + 1);
	}
};


// function over(){

// if (guesses > 0) {
// 	document.getElementById("results"),innerHTML = ("Good Job! The answer was " + word + " but you are still an idiot.");
// } else {
// 	document.getElementById("results"),innerHTML = ("Well, you suck at this game. The answer was " + word + " if you care. Now, kill yourself");
// }

// div id wordHolder
// div id guesses