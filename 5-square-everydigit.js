// Square everydigit  - Challenge #5

OfficalLink =
	'https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> Docs allowed (MSDN and w3schools)
function squareDigits(num) {
	let _array = [];
	[...num.toString()].map((val) => {
		_array.push(Math.pow(val, 2));
	});
	return parseInt(_array.join(''));
}

// --> Tests
console.log(squareDigits(9119));
console.log(squareDigits(1234));

// --> Best practice + Clever Solution
// --> Modified with my shorthand syntax (arrow function + sperad operator)
function squareDigits(num) {
	return Number([...num.toString()].map((val) => Math.pow(val, 2)).join(''));
}
