function longUpperCase(inputStr) {
	if (inputStr.length > 10) {
		return inputStr.toUpperCase();
	} else {
		return inputStr;
	}
}

console.log(longUpperCase('Hi, there my name is Jesse'));
console.log(longUpperCase('goodbye'));
console.log(longUpperCase('xoxoxoxoxo'));
console.log(longUpperCase('xoxoxoxoxox'));