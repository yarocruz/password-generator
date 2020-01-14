// Assignment Code
const generateBtn = document.querySelector('#generate');

let lowerCase = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

let upperCase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

let numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
let specialCharacters = [
	'!',
	'"',
	'#',
	'$',
	'%',
	'&',
	'(',
	')',
	'*',
	'+',
	'?',
	'@',
	',',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'>',
	'=',
	'[',
	']',
	'\\',
	'^',
	'_',
	'`',
	'{',
	'}',
	'|',
	'~'
];
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
	let numberOfCharacters = parseInt(prompt('How many characters long do you want the password to be.'));
	if (isNaN(numberOfCharacters)) {
		numberOfCharachers = prompt('Please enter a valid number');
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

	//copyBtn.removeAttribute('disabled');
	//copyBtn.focus();
}

function copyToClipboard() {
	// BONUS
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// BONUS EVENT LISTENER
