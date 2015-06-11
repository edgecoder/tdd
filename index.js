var doubler = function(a, b) {
  if (typeof a === 'string') {
    return a + a + b + b;
  } else if (typeof a === 'function') {
    return ( a() + b() )*2;
  } else if (typeof a === 'object') {
    var keys = Object.keys(a);
    var aValues = [];
    for (var key in a) {
      aValues.push(a[key]);
    }
    a[keys[0]] = aValues[0]*2;
    a[keys[1]] = aValues[1]*2;
    return a;
  } else {
    return (a + b) * 2;
  }
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

console.assert(doubler(m4, m2) === 12);
console.assert(doubler(m1, m3) === 8);

function objectsEqual() {
  var keysArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var arr = Object.keys(arguments[i]);
    keysArr.push(arr);
  }
  var arrOneSort = keysArr[0].sort();
  var arrTwoSort = keysArr[1].sort();
  
  if (arrOneSort[0] === arrTwoSort[0]) {
    for (var j = 0; j < arrOneSort.length; j++) {
      if (arguments[0][arrOneSort[j]] === arguments[1][arrOneSort[j]]) {
        return true;
      }
    }
  } else {
    return false;
  }
}

var a = { z: 42 , t: 7 }, b = { t: 7, z: 42 }

console.assert(objectsEqual(a, b));
console.assert(objectsEqual(b, a));

objectsEqual(doubler({x1: 1, x2: 4}), {x1: 2, x2: 8});
objectsEqual(doubler({x1: -4, x2: 0}), {x1: -8, x2: 0});
