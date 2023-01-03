function allMatches(inputArray, searchStr) {
	let foundArray = [];
	for (let i of inputArray) {
		if (/searchStr/.test(i)) {
			foundArray.push(i);
		}
	}
	return foundArray;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));