// Counting Sheeps - Challenge #3

OfficalLink =
	'https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript';

// My first approach to the problem
function countSheeps(arrayOfSheep) {
	// --> Refactored appraoch
	return arrayOfSheep.reduce((total, precence) => {
		return precence ? (total += 1) : total;
	}, 0);
	// --> First proach
	var total = 0;
	arrayOfSheep.map((ele) => {
		ele ? (total += 1) : null;
	});
	return total;
}

// --> Tests
var array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

var array2 = [true, true, false, true];

console.log(countSheeps(array1));

// --> Best Practice + Clever solution
function countSheeps(arrayOfSheeps) {
	// The filter method acceptes the Boolean function as a test function
	// and test each element in the array for a boolean value
	return arrayOfSheeps.filter(Boolean).length;
}

// Test.expect(countSheeps(array1) == 17, 'There are 17 sheeps in total');
