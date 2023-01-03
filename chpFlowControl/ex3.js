function evenOrOdd(num) {
	if (typeof num === 'number') {
		if (num % 2 === 0) {
			console.log('even');
		} else {
			console.log('odd');
		}
	}
	else {
		console.log('ERROR: is not a number!')
	}
}

evenOrOdd('one');
evenOrOdd(2);
evenOrOdd(0);