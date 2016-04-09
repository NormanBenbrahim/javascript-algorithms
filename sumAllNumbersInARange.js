/*
--- Sum All Numbers in a Range ---

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()
*/


function sumAll(arr) {
	var num1, num2;
  
	if (arr[0]<arr[1]) {
		num1 = arr[0];
    	num2 = arr[1];    
	} else {
    	num2 = arr[0];
    	num1 = arr[1];
	}
  

	var count = 0;
  
	for (i=num1; i<num2+1; i++) {
    	count += i;
	}
	return count;
}

/*
--- Debug ---
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

*/