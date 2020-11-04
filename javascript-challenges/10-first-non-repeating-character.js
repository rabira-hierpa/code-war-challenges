// First non-repeating character - Challenge #10

OfficalLink =
	'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function firstNonRepeatingLetter(string) {
	let strArray = string.split('');
	let unique = []; // holdes unique characters
	let double = []; // holdes double characters
	for (let i = 0; i < strArray.length; i++) {
		const holder = strArray[i];
		let checker = 0;
		for (let j = i + 1; j < strArray.length; j++) {
			const walker = strArray[j];
			if (holder.toLowerCase() === walker.toLowerCase()) {
				// compare using lowercase
				checker += 1;
				double.push(holder);
			}
		}
		// check if the cheker is 0 and holder is not a double value
		if (checker === 0 && double.lastIndexOf(holder) === -1) {
			unique.push(holder);
		}
	}
	// return the first character of the unique
	// array or the string itself if its legnth
	// is only one
	return unique.length ? unique[0] : strArray.length === 1 ? string : '';
}
// Codewars best practice and clever solution

function firstNonRepeatingLetter(s) {
	for (var i in s) {
		if (s.match(new RegExp(s[i], 'gi')).length === 1) {
			return s[i];
		}
	}
	return '';
}

// --> Tests

console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTressTest'));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('abba'));
console.log(firstNonRepeatingLetter('moomen'));
console.log(firstNonRepeatingLetter(''));
console.log(firstNonRepeatingLetter('tata'));
console.log(firstNonRepeatingLetter('cars'));
console.log(firstNonRepeatingLetter(''));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));
// --> Codware test using mocah
// Test.describe('Simple Tests', function() {
//   it('should handle simple tests', function() {
//     Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//   });
// });
