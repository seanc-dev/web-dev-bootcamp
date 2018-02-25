
var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

function print(arr){
	arr.forEach(function(el){
		console.log(el)
	})
}

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el)
	})
}

// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
// 	if (isBlue) {
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "#3498db";
// 	}
// 	isBlue = !isBlue;
// }, 1000);

var tag = {}
tag.data = "h1";
tag.isOn = false;

document.getElementsByTagName(tag.data).classList.toggle