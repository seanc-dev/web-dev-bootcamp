
function isEven(num) {
	if(isNaN(num)) {return "Not a number"};
	if(num % 2 === 0) {return true};
	return false
};

function factorial(num) {
	var result = num;
	for (var i = num-1; i > 0; i--) {
		result = result * i
	};
	return result;
}

function kebabToSnake(kebabString) {
	var result = kebabString
	return result.replace(/-/g, "_")
}