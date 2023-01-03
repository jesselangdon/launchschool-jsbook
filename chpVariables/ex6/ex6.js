const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// this returns 'bar', for the same reason as exercise 5, (local scoping).