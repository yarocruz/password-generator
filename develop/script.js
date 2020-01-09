// Assignment Code
const generateBtn = document.querySelector('#generate');

// generate random password *For now it's just generating a random number between 1 and 100
function generatePassword() {
	let randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log(randomNumber);
	return randomNumber;
}

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');

	passwordText.value = password;

	//copyBtn.removeAttribute('disabled');
	//copyBtn.focus();
}

function copyToClipboard() {
	// BONUS
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// BONUS EVENT LISTENER
