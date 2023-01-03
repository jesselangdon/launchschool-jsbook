function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// should return an array with the lenghths of words found in a string, from largest to smallest