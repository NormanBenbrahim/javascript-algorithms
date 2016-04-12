/* --- Arguments Optional ---

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
*/

function addTogether() {
  // first loop through the arguments and if they aren't numbers return undefined
  for (var i = 0; i<arguments.length; i++) {
    if (typeof arguments[i]!== 'number') {
      return undefined;
    }
  } 
  
  // in the case where we have two numbers
  if (arguments.length===2) {
    return arguments[0] + arguments[1];
  }
  
  // in the case where we want to use a closure
  var x = arguments[0];
  return function(y) {
    if (typeof y !== 'number') {
      return undefined;
    }
    else {
      return x + y;
    }
  };
  
}



/* --- Debug --- 

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/