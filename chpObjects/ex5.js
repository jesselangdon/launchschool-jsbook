const myProtoObj = {
	foo: 1,
	bar: 2,
};

const myObj = Object.create(myProtoObj);
console.log(myProtoObj);
console.log(myObj.foo);
console.log(myObj.bar);