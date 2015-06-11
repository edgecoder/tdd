var doubler = function(a, b) {
  var double = (a + b)*2
  return double;
}
console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);
