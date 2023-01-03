function sumOfSquares(inputArray) {
	let squareArray = inputArray.reduce((accumulator, currentValue) => {
			return accumulator + (currentValue * currentValue);
		});
	return squareArray;
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83