var doubler = function(a, b) {
	if (Number.isInteger(a) && Number.isInteger(b)) {
	  return (2 * a) + (2 * b);
	} else {
		String(a);
		String(b);
		return (a + a) + (b + b);	
	}
	console.log(a, b);
}

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");