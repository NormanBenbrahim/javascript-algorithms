/* --- Steamroller ---

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamrollArray(arr) {
	new_arr = [];
	
	// create a function that will call itself iteratively for varying nest levels
	function pushLoop(a) {
		var len = a.length;
    	var i=0;
    	for (i; i < len; i++) {
    		if (a[i] && a[i].constructor == Array) {
        	pushLoop(a[i]);
    		} 
    		else {
				new_arr.push(a[i]);
			}
    	}
	}
	
	// call the function
	pushLoop(arr);
	return new_arr;

}

/* --- Debug ---

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/