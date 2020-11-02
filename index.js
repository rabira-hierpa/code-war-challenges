// First non-repeating character - Challenge #10

OfficalLink =
	'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function firstNonRepeatingLetter(string) {
	let strArray = string.split('');
	let unique = [];
	let double = [];
	// console.log(strArray);
	for (let i = 0; i < strArray.length; i++) {
		const holder = strArray[i];
		let checker = 0;
		// console.log(holder);
		for (let j = i + 1; j < strArray.length; j++) {
			const walker = strArray[j];
			if (holder === walker) {
				checker += 1;
				double.push(holder);
			}
		}
		if (checker === 0 && double.lastIndexOf(holder) === -1) {
			unique.push(holder);
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
console.log(firstNonRepeatingLetter('abba'));
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
