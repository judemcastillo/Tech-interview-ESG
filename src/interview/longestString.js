function isValid(s) {
	let stack = [];

	const pairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < s.length; i++) {
		let char = String(s[i]);
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		} else if (pairs[char] !== stack.pop()) {
			
			return false;
		} else {
			stack.pop();
		}
	}

	return true;
}
console.log(isValid("([])"));
