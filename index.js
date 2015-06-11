var doubler = function(a, b) {
	var result = ((a*2) + (b*2));
	return result;
}

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);
