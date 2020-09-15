// Break camelCase - Challenge #7

OfficalLink =
	'https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function solution(string) {
	// charCodeAt() - returns the unicode of the character
	result = [];
	string.split('').map((char, idx) => {
		return string.charCodeAt(idx) < 90
			? result.push(` ${char}`)
			: result.push(`${char}`);
	});
	return result.join('');
}

// --> Tests

console.log(solution('javaScriptIsSoAwesome'));
console.log(solution('camelCase'));
console.log(solution('rattleSnake'));
console.log(solution('pythonCodeTesting'));

// --> Codware test using mocah
// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result');
// Test.assertEquals(
// 	solution('camelCasingTest'),
// 	'camel Casing Test',
// 	'Unexpected result'
// );
