/* --- Symmetric Difference ---

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()
Symmetric Difference
*/

function sym() {
	// initialize with the first argument as an array so that 
	// the flattening will work
	// first remove duplicates from the individual arrays
	var tmp_arr = arguments[0];
	tmp_arr = tmp_arr.filter(filterFuncOriginal);
	var new_arr = [tmp_arr];
	
	// a function for flattening a multidimensional array
	function flatten(a, b) {
		return a.concat(b);
	}
	
	// a function for filtering duplicates from a mixed array
	// while removing the original duplicated item
	function filterFunc(item, index, self) {
		if (self[index]!==self[index-1] && self[index]!==self[index+1]) {
			return self[index];
		}	
	}
	
	// similar to above, except it keeps the original duplicated item
	function filterFuncOriginal(item, index, self) {
    	return self.indexOf(item) == index;
	}
	
	// loop through and "re-initialize" new_arr. this is because
	// the symmetric difference is associative
	for (var i = 1; i<arguments.length; i++) {
		//first remove duplicates from the array argument
		var tmp_arr2 = arguments[i];
		tmp_arr2 = tmp_arr2.filter(filterFuncOriginal);
		new_arr.push(tmp_arr2);

		
		// first make sure that new_arr remains one dimensional
		new_arr = new_arr.reduce(flatten);
		
		// sort the new array
		new_arr = new_arr.sort();
		
		// now remove duplicates with the filter function
		/* This works but makes use of a loop
   		for (var k = 1; k <j.length+1; k++) { 
			if (j[k]!==j[k-1] && j[k]!==j[k+1]) {console.log(j[i])} 
		}*/
		
		// this is better
		new_arr = [new_arr.filter(filterFunc)];
		
	}
	
	// unique values only remain, access the first element to get it
	// as a one dimensional array
	return new_arr[0];
}

/* --- Debug ---

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

*/