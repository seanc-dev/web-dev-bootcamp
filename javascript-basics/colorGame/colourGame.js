var colours = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColour = colours[3];
var colourDisplay = document.getElementById("colour-display");
var messageDisplay = document.getElementById("message");

colourDisplay.textContent = pickedColour

for(var i = 0; i < squares.length; i++) {
	// add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		console.log("clicked a square")
		// get colour of clicked square
		var clickedColour = this.style.backgroundColor;
		// compare clicked colour to picked colour (hehe)
		if(clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			changeColours(this.style.backgroundColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColours(colour) {
	// loop through squares and set them to pickedColour
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	};
	// set H1 background to be pickedColour
	document.querySelector("h1").style.backgroundColor = colour;
}