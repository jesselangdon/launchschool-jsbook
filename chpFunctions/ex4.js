function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); /*this won't show anything in the console because the function valuke is returned and the 
function terminated before console.log statement was executed. */