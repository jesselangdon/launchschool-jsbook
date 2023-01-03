let rlSync = require('readline-sync');
let userAge = rlSync.question('How old are you?\n');
console.log(`You are ${userAge} years old.`);
console.log(`In 10 years, you will be ${Number(userAge) + 10} years old.`);
console.log(`In 20 years, you will be ${Number(userAge) + 20} years old.`);
console.log(`In 30 years, you will be ${Number(userAge) + 30} years old.`);
console.log(`In 40 years, you will be ${Number(userAge) + 40} years old.`);