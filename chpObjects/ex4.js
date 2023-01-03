let obj = {
	b: 2,
	a: 1,
	c: 3,
}

let objUCase = Object.keys(obj);
console.log(objUCase);
newArray = objUCase.map(i => i.toUpperCase());
console.log(newArray);