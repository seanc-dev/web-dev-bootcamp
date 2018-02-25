var colourClasses = ["sunshine","aqua","red","purple","lime","blue"];
var complementaryColours = {"sunshine": 5,"aqua": 2,"red": 1,"purple": 4,"lime": 3,"blue": 0};

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

var button = document.querySelector("button");

button.addEventListener("click",function() {

	// find index of previous colour to exclude from options below
	var prevIndex
	if (this.className.includes("-")) {
		var classes = this.className
		prevIndex = colourClasses.findIndex(function(el){
			return el === classes.substring(0,classes.search("-"))
		})
	} else {
		prevIndex = -1
	}
	console.log(prevIndex)

	// clear classList
	this.classList = ""
	document.querySelector("body").classList = ""
	
	// get random index and apply new classes
	var rand = prevIndex
	while (rand === prevIndex) {
		rand = getRandomInt(0,colourClasses.length-1)
		console.log("rand within while loop: " + rand)
	}
	var colour = colourClasses[rand]
	var buttonClass = colour + "-button"
	var bgClass = colourClasses[complementaryColours[colour]] + "-background"
	this.classList.toggle(buttonClass);
	document.querySelector("body").classList.toggle(bgClass)

});
