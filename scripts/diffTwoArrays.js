/*
--- Diff Two Arrays  ---

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/

function diffArray(arr1, arr2) {
	var arr1_cp = arr1.slice();
	var arr2_cp = arr2.slice();
  
	function filterZero(val) {
	return val!==0;
	}
  
	for (i = 0; i<arr1.length; i++) {
		for (j = 0; j<arr2.length; j++) {
			if (arr1[i]===arr2[j]) {
			//set them to 0 for filtering
			arr1_cp[i] = 0; 
			arr2_cp[j] = 0;
        
			}
		}
	}
  
	// filter 0 out of the arrays
	var arr1_final = arr1_cp.filter(filterZero); 
	var arr2_final = arr2_cp.filter(filterZero);
  	
	var newArr = arr1_final.concat(arr2_final);
	return newArr; // woohoo!
}

/*
--- Debug ---

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/