let bar = 1;
function foo() {
  let bar = 2;
}

foo(); // should return undefined
console.log(bar); /* because a new "bar" variable with local scope is explicitly declared within the 
"foo" function, that shouldn't affect the "bar" variable that was declared globally. */