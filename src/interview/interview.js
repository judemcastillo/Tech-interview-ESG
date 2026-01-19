// write a function that checks if a string has valid open and close brackets .

// Valid Case 1 : let s = '(hello world, [this is valid])';
// Valid Case 2 : let s = '( )  []';
// Invalid Case 1 : let s = '(hello world, [this is not valid)]';
// Invalid Case 2 : let s = '(hello world, [this is not valid)]]]]]';
// Invalid case 3 : let s = '[ [ ( ] ) ]';

function checkValidBrackets(s) {
	const array = s.split("");

	let isValid = true;

	const bracketParenthesis = [];

	for (let i = 0; i < array.length; i++) {
		const currentElement = array[i];
		if (
			currentElement === "(" ||
			currentElement === "[" ||
			currentElement === "]" ||
			currentElement === ")"
		) {
			bracketParenthesis.push(currentElement);
		}
	}

	for (let i = 0; i < bracketParenthesis.length; i++) {
		const currentElement = bracketParenthesis[i];
		const previosElement = bracketParenthesis[i - 1];

		if (currentElement === ")") {
			if (previosElement !== "(") {
				return (isValid = false);
			}
			bracketParenthesis.splice(i - 1, 1);
		}
		if (currentElement === "]") {
			if (previosElement !== "[") {
				return (isValid = false);
			}
			bracketParenthesis.splice(i - 1, 1);
		}
	}

	return isValid;
}

console.log(checkValidBrackets("(hello world, [this is valid])")); //true
console.log(checkValidBrackets("( )  []")); //true
console.log(checkValidBrackets("(hello world, [this is not valid)]")); //false
console.log(checkValidBrackets("(hello world, [this is not valid)]]]]]")); //false
console.log(checkValidBrackets("[ [ ( ] ) ]")); //false
