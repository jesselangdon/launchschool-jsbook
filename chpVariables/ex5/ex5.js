let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// Returns 'bar' instead of 'qux', because the foo variable's value was reassigned within a locally-scope code block.
// and the console.log was called outside of that block.