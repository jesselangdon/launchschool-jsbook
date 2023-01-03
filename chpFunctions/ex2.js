function responder(prompt) {
  let rlsync = require('readline-sync');
	let userName = rlsync.question(prompt);
	return userName;
}

let firstName = responder("What is your first name? ");
let lastName = responder("What is your last name? ");
console.log(`Good morning, ${firstName} ${lastName}!`);
