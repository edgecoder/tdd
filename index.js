var doubler = function() {
  if (typeof(arguments[0]) === 'function') {
    return arguments[0]() + arguments[0]() + arguments[1]() + arguments[1]();
  } else if (typeof(arguments[0]) === 'object') {
    var double = {}
    for (key in arguments[0]){
      double[key] = (arguments[0][key] + arguments[0][key]);
    }
    return double;
  }
  return arguments[0] + arguments[0] + arguments[1] + arguments[1];
};

function objectsEqual() {
  var objects = [];
  for (key in arguments){
    objects.push(arguments[key]);
  }

  for (var i = 1; i < objects.length; i++){
    if (objects[0][key] !== objects[i][key]){
      return false;
    }
  }
  return true;
}

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

var a = { z: 42 , t: 7 }, b = { t: 7, z: 42 };

console.assert(objectsEqual(a, b));
console.assert(objectsEqual(b, a));

objectsEqual(doubler({x1: 1, x2: 4}), {x1: 2, x2: 8});
objectsEqual(doubler({x1: -4, x2: 0}), {x1: -8, x2: 0});
