/* --- Smallest Common Multiple ---

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
*/


// going to implement the table method outline on wikipedia
// https://en.wikipedia.org/wiki/Least_common_multiple#A_method_using_a_table
function smallestCommons(arr) {
	var n1 = arr[0];
	var n2 = arr[1];

	// check that the first number isn't bigger than the second and switch the order
	if (n2<n1) {
		n2 = arr[0];
		n1 = arr[1];
	}

	// get an array containing all integers from n1 to n2
	var full_array = [];

	for (i = n1; i<=n2; i++) {
		full_array.push(i);
	}
	
	// define the function to use in map
	function mapFunc(num) {
		return num % k;
	}

	//define the function to use to sum all elements in array
	function sumAll(a, b) {
		return a + b;
	}
	
	// while loop condition
	var done = false;
	var n = full_array.length;
	var mult = 1; // multiplication accumulator
	var k = 2; //divisor

	while (done===false) {
		//apply the remainder to the array
		remainder_array = full_array.map(mapFunc);
		var total_sum = 0; // sum accumulator for remainder

		// loop through current array, if any of the elements in current array===0,
		// then set those values to value/k and restart the loop, otherwise 
		var continue_loop = true;
		var change_k = true;
		for (i = 0; i<remainder_array.length; i++) {
			if (remainder_array[i]===0 && full_array[i]!==1) {
				console.log('array element for index ' + i + ' =  ' + full_array[i]);				
				full_array[i] = full_array[i]/k; // divide by current k 
				continue_loop = false;
				change_k = false;
			}
			else if (full_array[i]===1) {
				total_sum += 1; //want the remainders to be 1 and the element to be 1 since 1 % n = 1 for all n
			}
		}
		// update the divisor
		if (continue_loop) {
			if (change_k && k===2) {
				k += 1;
			}
			else if (change_k && k!==2) {
				k += 2;
			}
		}
		else {
			mult *= k; // update the multiplication value
		}
		console.log('k =  ' + k);
		// at the end, all the elements of remainder array will be 1, therefore 
		// the sum of remainder array will be exaclty the length of the remainder
		// array.
		var total = remainder_array.reduce(sumAll);

		//finally if total===n, done=true
		if (total_sum===n) {
			done = true;
		}
	}
	
	return mult;
}
smallestCommons([1, 13]);

/* --- Debug ---

 should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
*/