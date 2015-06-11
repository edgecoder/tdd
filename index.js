var doubler = function(a, b) {

  if ((!isNaN(a)) && (!isNaN(b))) {
    return (a+b)*2;
  }
  else {
    return (a+a)+(b+b);
  }
}
console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");
