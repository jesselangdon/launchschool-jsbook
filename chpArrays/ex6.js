function oddLengths(inputArray) {
	let arrLengths = inputArray.map(element => element.length);
	let oddLengths = arrLengths.filter(i => i % 2 !== 0);
	return oddLengths;}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));