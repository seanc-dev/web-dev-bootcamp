function printReverse(arr) {
	var arrlen = arr.length
	for (var i = arrlen; i >= 0; i--) {
		console.log(arr[i]);
	};
}

function isUniform(arr) {
	var firstItem = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== firstItem) {
			return false;
		};
	};
	return true;
}

function sumArray(arr) {
	var workingSum = 0;
	for (i = 0; i < arr.length; i++) {
		workingSum += arr[i];
	};
	return workingSum;
};

function max(arr) {
	var workingMax = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > workingMax) {
			workingMax = arr[i];
		};
	};
	return workingMax;
};