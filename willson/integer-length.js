/*
 * Integer Length
 *
 * Write a function that takes an integer as input and returns the number of
 * digits in that integer.
*/

var integerLength = function (num) {
  return ('' + Math.abs(num)).length;
};