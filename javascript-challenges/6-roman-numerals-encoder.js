// Roman numerals encoder  - Challenge #4

OfficalLink =
	'https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)
/// Roman numbers
// I <-> 1
// V <-> 5
// X <-> 10
// L <-> 50
// C <-> 100
// D <-> 500
// M <-> 1,000

function solution(number) {
	// convert the number to a roman numeral
	const romanDict = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M',
	};

	let convertedRoman = [];

	let div = 1;
	while (number >= div) {
		div *= 10;
	}

	div /= 10;

	result = '';

	while (number) {
		lastNum = Math.trunc(number / div);
		if (lastNum <= 3) {
			result = romanDict[div].repeat(lastNum);
			convertedRoman.push(romanDict[div].repeat(lastNum));
		} else if (lastNum == 4) {
			result = romanDict[div] + romanDict[div * 5];
			convertedRoman.push(result);
		} else if (lastNum == 9) {
			result = romanDict[div] + romanDict[div * 10];
			convertedRoman.push(result);
		} else if (5 <= lastNum <= 8) {
			result = romanDict[div * 5] + romanDict[div].repeat(lastNum - 5);
			convertedRoman.push(result);
		}

		number = Math.floor(number % div);
		div /= 10;
	}
	return convertedRoman.join('');
}

// Codewars best solution

function convertToRoman(number) {
	// convert the number to a roman numeral
	var roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	var ans = '';
	while (number > 0) {
		for (a in roman) {
			if (roman[a] <= number) {
				ans += a;
				number -= roman[a];
				break;
			}
		}
	}
	return ans;
}

// --> Tests
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(19));
console.log(solution(22));
console.log(solution(15));

console.log(solution(1000));
console.log(solution(1001));
console.log(solution(1990));
console.log(solution(2007));
console.log(solution(2008));

// --> Codware test using mocah
// describe('solution', () => {
// 	it('should handle small numbers', () => {
// 		Test.assertEquals(solution(2), 'II', '2 should, "II"');
// 		Test.assertEquals(solution(1), 'I', '1 should, "I"');
// 		Test.assertEquals(solution(3), 'III', '3 should, "III"');
// 		Test.assertEquals(solution(4), 'IV', '4 should, "IV"');
// 		Test.assertEquals(solution(5), 'V', '5 should, "V"');
// 		Test.assertEquals(solution(9), 'IX', '9 should, "IX"');
// 		Test.assertEquals(solution(10), 'X', '10 should, "X"');
// 		Test.assertEquals(solution(11), 'XI');
// 		Test.assertEquals(solution(19), 'XIX');
// 		Test.assertEquals(solution(22), 'XXII');
// 		Test.assertEquals(solution(15), 'XV');
// 	});

// 	it('should handle large numbers', () => {
// 		Test.assertEquals(solution(1000), 'M', '1000 should, "M"');
// 		Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"');
// 		Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"');
// 		Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"');
// 		Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"');
// 	});
// });
