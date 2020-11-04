// List Filtering - Challenge #8

OfficalLink =
	'https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> NO YouTube !!!
// --> Docs allowed (MSDN and w3schools)

function filter_list(list) {
	// Return a new array with the strings filtered out
	let filtered = [];
	list.map((element) => {
		return !isNaN(element) && Number(element) === element
			? filtered.push(element)
			: null;
	});
	return filtered;
}

// Codewars best soution
function filterList(list) {
	return list.filter((element) => typeof element == 'number');
}

// --> Tests

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// --> Codware test using mocah
// Test.assertSimilar(filter_list([1, 2, 'a', 'b']), [1, 2]);
// Test.assertSimilar(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
// Test.assertSimilar(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
