function isNegativeZero(inputValue) { 
	return (inputValue === 0) && (1 / inputValue === -Infinity);
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(1));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(-3));