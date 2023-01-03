function getNumber(prompt) {
	let rlsync = require('readline-sync');
	let number = rlsync.question(prompt);
	return number;
}

function multiply(number01, number02) {
	let product = number01 * number02;
	console.log(`${number01} * ${number02} = ${product}`);
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");
multiply(firstNumber, secondNumber);