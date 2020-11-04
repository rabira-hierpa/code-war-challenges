// Unique in order  - Challenge #4

OfficalLink =
	'https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript';

// My first approach to the problem
// --> NO StackOverflow !!!
// --> Docs allowed (MSDN and w3schools)
var uniqueInOrder = function (iterable) {
	return Number.isNaN(iterable)
		? iterable.split('').filter((value, index, array) => {
				console.log(value);
				return value !== array[index + 1];
		  })
		: [...iterable].filter((value, index, array) => {
				return value !== array[index + 1];
		  });
};
// --> Tests
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// --> Best practice + Clever solution
var uniqueInOrder = function (iterable) {
	return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
