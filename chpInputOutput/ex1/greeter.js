let rlSync = require('readline-sync');
let userName = rlSync.question('What is your name?\n');
console.log(`Hello, ${userName}!`);