function checkFor3(inputArray) {
	let result = inputArray.filter(element => element === 3);
	if (result.length > 0) {
		return true;
	} else {
		return false;
	}
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
let numbers4 = [1, 2, 3, 4, 100, 200, 3000]

console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));
console.log(checkFor3(numbers4));