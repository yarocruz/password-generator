// Assignment Code
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');

// ----- CHARACTER ARRAYS -------
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// prettier-ignore
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// prettier-ignore
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
let specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];
// prettier-ignore

let randomPassword = [];

// generate random password *For now it's just generating a random number between 1 and 100
function generatePassword(arr, number) {
	let newArray = arr.flat();
	let newPassword = [];
	for (let i = 0; i < number; i++) {
		let randomIndex = Math.floor(Math.random() * newArray.length - 1) + 1;
		newPassword.push(newArray[randomIndex]);
	}
	return newPassword.join('');
}

// Write password to the #password input
function writePassword() {

	let numberOfCharacters = parseInt(prompt('How many characters do you want the password to be'));

	if (numberOfCharacters < 8 || numberOfCharacters > 128) {
		alert('Please type a number between 8 and 128');
		return;
	} else if (isNaN(numberOfCharacters)) {
		alert('Please type a valid number');
		return;
	}

	let specialCharactersQuestion = confirm('Do you want special characters?');

	if (specialCharactersQuestion) {
		randomPassword.push(specialCharacters);
		//console.log(randomPassword);
	}

	let numberQuestion = confirm('Do you want the password to have numbers');

	if (numberQuestion) {
		randomPassword.push(numbers);
		//console.log(randomPassword);
	}

	let lowerCaseQuestion = confirm('Do you want lowercase characters');

	if (lowerCaseQuestion) {
		randomPassword.push(lowerCase);
		//console.log(randomPassword);
	}

	let upperCaseQuestion = confirm('Do you want uppercase characters');

	if (upperCaseQuestion) {
		randomPassword.push(upperCase);
		//console.log(randomPassword);
	}

	let password = generatePassword(randomPassword, numberOfCharacters);

	let passwordText = document.querySelector('#password');

	passwordText.value = password;

}

function copyToClipboard() {
	let copyText = document.querySelector('#password');
	copyText.select();
	document.execCommand("copy");
	alert(`The password ${copyText.value} has been copied to your clipboard`)
}

// Add event listeners to generate button and copy password to clipboard
generateBtn.addEventListener('click', writePassword);
copyBtn.addEventListener('click', copyToClipboard);

