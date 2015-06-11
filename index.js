var doubler = function(a, b) {
  if (typeof a === "object") {
    for (var objKey in a) {
      a[objKey] = a[objKey] * 2;
    }
    return a;
  }
  return a + a + b + b;
};

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");

function m3() { return 3; }
function m4() { return 4; }
function m2() { return 2; }
function m1() { return 1; }

console.assert(doubler(m4(), m2()) === 12);
console.assert(doubler(m1(), m3()) === 8);

function objectsEqual(a, b) {
  for (var objKey in a) {
    if ( a[objKey] !== b[objKey] ) { return false; }
  }
  return true;
}

var a = { z: 42 , t: 7 }, b = { t: 7, z: 42 };

console.assert(objectsEqual(a, b));
console.assert(objectsEqual(b, a));

objectsEqual(doubler({x1: 1, x2: 4}), {x1: 2, x2: 8});
objectsEqual(doubler({x1: -4, x2: 0}), {x1: -8, x2: 0});
