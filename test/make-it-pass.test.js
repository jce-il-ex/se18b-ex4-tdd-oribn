var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
    var c;
    c=a+b;
    return c;
}
function multiply (a, b) {
    var c;
    c=a*b;
    return c;
}
test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});
test('multiply should return the multiplication of two numbers', function (t) {
  t.equal(2, multiply(1, 2)); // make this test pass by completing the multiply function!
  t.end();
});
