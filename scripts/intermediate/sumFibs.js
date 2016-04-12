/* --- Sum All Odd Fibonacci Numbers ---

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
	var fib = [];
	
	// initialize the first 2 fibonacci numbers
	fib[0] = 0;
	fib[1] = 1;
	var count = fib[1]; // start the 'odd-counter' at the first odd number
	
	for (i = 2; i<=num; i++) {
		fib[i] = fib[i-2] + fib[i-1];
		
		if (fib[i]>num) {
			break;
		}
		else if (fib[i]%2!==0) {
			count += fib[i];
		}
	}
	return count;
	
}

/* --- Debug ---

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/