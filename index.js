var doubler = function(a, b) {
  if(typeof a === 'string' && typeof b === 'string'){
    return a + a + b + b;
  }
  if(typeof a === 'number' && typeof b === 'number'){
    return 2 * a + 2 * b;
  }
}

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");
