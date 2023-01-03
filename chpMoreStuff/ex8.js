function isNotANumber(input) {
	let x = input;
	if (x !== x) {
		return true;
	} else {
		return false;
	}
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
console.log(isNotANumber('blue'));
console.log(isNotANumber(-1));