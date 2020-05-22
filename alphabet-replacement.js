// Alphabet replacment - challenge #1
OfficalLink = 'https://www.codewars.com/kata/546f922b54af40e1e90001da';

// My first approach solution
function alphabetPosition(text) {
	_text = [];
	let allAlphas = 'abcdefghijklmnopqrstuvwxyz'.split('');
	text.split(' ').forEach((element) => {
		element = element.split('');
		element.forEach((ele) => {
			ele = ele.toLowerCase();
			allAlphas.indexOf(ele) !== -1
				? _text.push(allAlphas.indexOf(ele) + 1)
				: null;
		});
	});
	return _text.join(' ');
}

// ================== Tests ============================
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';
alphabetPosition('The narwhal bacons at midnight.');
//'20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20';

// Best practice + Clever solution by hencethus https://www.codewars.com/users/hencethus

function alphabetPosition(text) {
	return (
		text
			.toUpperCase() // for easier ASCII code comparision
			.match(/[a-z]/gi) // searches a string for a match against a regular expression, and returns the matches, as an Array object.
			// (/[a-z]/gi) - Match a single character present in the list below [a-z]
			// a - z a single character in the range between a(index 97) and z(index 122)(case insensitive)
			.map((c) => c.charCodeAt() - 64) // charCoeAt -Return the Unicode of the first character in a string
			// map() - method creates a new array with the results of calling a function for every array element.
			.join(' ') //method creates a new array with the results of calling a function for every array element.
		//The elements will be separated by a specified separator
	);
}
