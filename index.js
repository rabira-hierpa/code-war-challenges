// List Filtering - Challenge #8

OfficalLink =
	'https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function solution(str) {
	let charLength = str.length;
	let array = [];
	if (charLength % 2 === 0) {
		let idx = 0;
		str.split('').forEach((element) => {
			str[idx] ? array.push(str.substr(idx, 2)) : null;
			idx += 2;
		});
		return array;
	} else {
		let idx = 0;
		str.split('').forEach((element, index) => {
			str[idx] ? array.push(str.substr(idx, 2)) : null;
			idx += 2;
		});
		array.pop();
		var last = charLength - 1;
		array.push(str[last] + '_');
		return array;
	}
}

// Codewars best soution
function spliString1(str) {
	var i = 0;
	var result = new Array();
	if (str.length % 2 !== 0) {
		str = str + '_';
	}
	while (i < str.length) {
		result.push(str[i] + str[i + 1]);
		i += 2;
	}
	return result;
}

// ==> Using Regex
function splitStringRegex(s) {
	return (s + '_').match(/.{2}/g) || [];
}
// --> Tests

console.log(solution('abcde'));
console.log(solution('abcdef'));
console.log(solution('abcdefg'));
console.log(solution('abcdefghijk'));
console.log(solution(''));
console.log(solution('a'));
// --> Codware test using mocah
// const { assert } = require('chai');

// describe('Split Strings', () => {
// 	it('Basic tests', () => {
// 		assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
// 		assert.deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
// 		assert.deepEqual(solution(''), []);
// 	});
// });
