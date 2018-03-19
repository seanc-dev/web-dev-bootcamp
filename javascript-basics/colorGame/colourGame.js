var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colour-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var defaultH1Colour = "steelblue"

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// run reset
		reset();
	});
};

function reset() {
	console.log("reset run");
	// generate all new colours
	colours = generateRandomColours(numSquares);
	// pick new random colour from array
	pickedColour = pickColour();
	// set colour display to picked colour
	colourDisplay.textContent = pickedColour;
	// change reset button text
	reset.textContent = "New Colours";
	// reset click response message text
	messageDisplay.textContent = "";
	// change colours of squares
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]) {
		squares[i].style.backgroundColor = colours[i];
		} else {
		squares[i].style.background = colours[i];
	};
	// reset h1 background to standard colour
	h1.style.backgroundColor = defaultH1Colour;
};

colourDisplay.textContent = pickedColour;

// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay .textContent = pickedColour;
// 	for(var i = 0; i < squares.length; i++) {
// 		if (colours[i]) {
// 			squares[i].style.backgroundColor = colours[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	};
// });

// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colours = generateRandomColours(numSquares);
// 	pickedColour = pickColour();
// 	colourDisplay .textContent = pickedColour;
// 	for(var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colours[i];
// 			squares[i].style.display = "block";
// 	};
// });

resetButton.addEventListener("click", function() {
	reset();
});

// game start loop
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
			reset.textContent = "Play Again?"
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