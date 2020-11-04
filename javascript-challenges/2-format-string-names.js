// Format a string of names - Challenge #2

OfficalLink =
	'https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript';

// My first approach to the problem
function list(names) {
	//your code here
	var strNames = [];
	if (names.length === 1) {
		strNames.push(names[0].name);
	}
	if (names.length === 2) {
		strNames.push(names[0].name + ' & ' + names[1].name);
	}
	if (names.length >= 3) {
		var revNames = names.reverse();
		var lastNames = ' ' + names[1].name + ' & ' + names[0].name;
		revNames.shift();
		revNames.shift();
		revNames.map((element, i) => {
			i === revNames.length - 1
				? strNames.push(element.name)
				: strNames.push(' ' + element.name);
		});
		strNames.reverse().push(lastNames);
	}
	return strNames.toString();
}

// --> Test Cases
console.log(
	list([
		{ name: 'Bart' },
		{ name: 'Lisa' },
		{ name: 'Maggie' },
		{ name: 'Homer' },
		{ name: 'Marge' },
	])
);
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));

// ------> Best practice and clever solution
function list(names) {
	var xs = names.map((p) => p.name); // extract the objects to string array
	var x = xs.pop(); // get the last element from the extracted array
	return xs.length ? xs.join(', ') + ' & ' + x : x || ''; // if length is > 0 then join all with ',' and append ' & ' to the last string else return the string itself or an empty string
}

//  ========= Kata test cases
// Test.assertEquals(
// 	list([
// 		{ name: 'Bart' },
// 		{ name: 'Lisa' },
// 		{ name: 'Maggie' },
// 		{ name: 'Homer' },
// 		{ name: 'Marge' },
// 	]),
// 	'Bart, Lisa, Maggie, Homer & Marge',
// 	'Must work with many names'
// );
// Test.assertEquals(
// 	list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]),
// 	'Bart, Lisa & Maggie',
// 	'Must work with many names'
// );
// Test.assertEquals(
// 	list([{ name: 'Bart' }, { name: 'Lisa' }]),
// 	'Bart & Lisa',
// 	'Must work with two names'
// );
// Test.assertEquals(
// 	list([{ name: 'Bart' }]),
// 	'Bart',
// 	'Wrong output for a single name'
// );
// Test.assertEquals(list([]), '', 'Must work with no names');
