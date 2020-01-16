# Password / [Demo](https://yarocruz.github.io/password-generator/develop/) 

![screenshot](assets/03-javascript-homework-demo.png)

## Description

This is a web application that generates a random password based on user-selected criteria. It randomly selects from a list of four different character types, which are [special characters]((https://www.owasp.org/index.php/Password_special_characters)), numeric characters, lowercase characters, and finally uppercase characters.

To create a password you start by clicking on the generate password button. It will prompt the user to type in the number of characters they want. If the user types in a number that's either less than 8 or over 128, it will pop up an alert and stop the program. It also checks if the user types something other than a number and throws an alert for that as well.

If it passes all the number checks, it pops up a sequence of confirm boxes asking the user if they want special characters, numbers, lowercase letters, and uppercase letters. You click on OK if yes, cancel for no. True or false. The user has to at least select one character type, if not the program returns.

## Technologies

This project uses plain ol' JavaScript. The trick that makes it all work is JavaScript's built in [Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) with its methods like [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 

## Problems / Solutions

The hardest part of this project was figuring out how to actually randomly select from a list of different arrays. 

``` js
function generatePassword(arr, number) {
	let newArray = arr.flat();
	let newPassword = [];
	for (let i = 0; i < number; i++) {
		let randomIndex = Math.floor(Math.random() * newArray.length - 1) + 1;
		newPassword.push(newArray[randomIndex]);
	}
	return newPassword.join('');
}
```
I spent more time with this function than any other line of code, specially on the line **newPassword.push(newArray[randomIndex])** 

## Demo

See live demo [here](https://yarocruz.github.io/password-generator/develop/)

## License 

[MIT](/LICENSE)

Feel free to clone this repo and modify as you wish.