var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colour-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

colourDisplay.textContent = pickedColour;

resetButton.addEventListener("click", function() {
	// generate all new colours
	colours = generateRandomColours(6);
	// pick new random colour from array
	pickedColour = pickColour();
	//console.log("colourIndex: ", colourIndex);
	console.log("pickedColour: ", pickedColour);
	// set colour display to picked colour
	colourDisplay.textContent = pickedColour;
	// change colours of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
	};
	h1.style.backgroundColor = "#232323";
});

for(var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		// get colour of clicked square
		var clickedColour = this.style.backgroundColor;
		// compare clicked colour to picked colour (hehe)
		if(clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			changeColours(this.style.backgroundColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		};
	});
};

function changeColours(colour) {
	// loop through squares and set them to pickedColour
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	};
	// set H1 background to be pickedColour
	h1.style.backgroundColor = colour;
};

function returnRandom(num) {
	var random = Math.floor(Math.random() * num + 1);
	return random;
};

function pickColour() {
	var random = Math.floor(Math.random() * colours.length);
	console.log("colours.length: ",colours.length);
	return colours[random];
};

function generateRandomColours(num) {
	// make an array
	var arr = [];
	for(var i = 0; i < num; i++) {
		// get random colour and push into arr
		arr.push(randomColour());
	};
	return arr
};

function randomColour() {
	// pick a "red" from 0-255
	var r = returnRandom(255);
	// pick a "green" from 0-255
	var g = returnRandom(255);
	// pick a "blue" from 0-255
	var b = returnRandom(255);
	// concat string
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}