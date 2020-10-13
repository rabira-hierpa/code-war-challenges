// First non-repeating character - Challenge #10

OfficalLink =
	'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function firstNonRepeatingLetter(string) {
	let strArray = string.split('').sort();
	let unique = [];
	let double = [];
	console.log(strArray);
	for (let i = 0; i < strArray.length; i++) {
		const holder = strArray[i];
		for (let j = i + 1; j < strArray.length; j++) {
			const walker = strArray[j];
			if (holder === walker) {
				double.push(holder);
				i = i + 1;
			} else {
				unique.includes(holder) && double.includes(holder)
					? null
					: unique.push(holder);
			}
		}
	}
	console.log(unique);
	return unique.length ? unique[0] : string;
}

// Codewars best soution

// --> Tests

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTressTest'));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('moomen'));
console.log(firstNonRepeatingLetter(''));
// console.log(firstNonRepeatingLetter('tata'));
// console.log(firstNonRepeatingLetter('cars'));
// console.log(firstNonRepeatingLetter(''));
// console.log(firstNonRepeatingLetter('a'));
// --> Codware test using mocah
// Test.describe('Simple Tests', function() {
//   it('should handle simple tests', function() {
//     Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//   });
// });
