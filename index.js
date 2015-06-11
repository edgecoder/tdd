var doubler = function(a, b) {
  console.log(a + a + b + b)
}


function m3() { return 3; }
function m4() { return 4; }
function m2() { return 2; }
function m1() { return 1; }

(doubler(m4, m2) === 12);
(doubler(m1, m3) === 8);
