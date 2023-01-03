function copyObj(inputObj, keyArray) {
	let outputObj = {};
	if (keyArray) {
		keyArray.forEach(function(key) {
			outputObj[key] = inputObj[key];
		});
		return outputObj;
 	} else {
		outputObj = Object.assign(inputObj)
		return outputObj;
	}
}

let objToCopy = {
	foo: 1,
	bar: 2,
	qux: 3,
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);  

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);

// NOT WORKING WITH 