/* --- Inventory Update ---

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing 
inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object
*/

function updateInventory () {
	// first let's turn these arrays into objects
	var arr = {};
	
	// note the initial value provided at the end is the object to be populated!
	arguments[0].reduce(function(prevValue, currValue) {
		arr[currValue[1]] = currValue[0];
	}, arr);
	
	// now loop through the pairs in arr2, and if the property exists, add the value.
	// otherwise add the property/value pair itself
	arguments[1].reduce(function(prevValue, currValue) {
		if (arr.hasOwnProperty(currValue[1])) {
			arr[currValue[1]] += currValue[0];
		}
		else {
			arr[currValue[1]] = currValue[0];
		}
	}, arr);
	
	// get the keys and values as arrays to sort
	var keys = [], values = [];
	for (var key in arr) {
		keys.push(key);
		values.push(arr[key]);
	}

	// create the sorting function 
	function sortIndex(a, b) { 
		return keys[a] < keys[b] ? -1 : keys[a] > keys[b] ? 1 : 0;
	}
	
	// do the sorting
	var indices = new Array(keys.length); //initialize an index object
	for (var i = 0; i<keys.length; i++) {
		indices[i] = i;
		indices.sort(sortIndex);
	}
	
	// now for each index in indices we return an array sorted alphabetically
	var returnArray = [];
	
	indices.reduce(function(prevValue, currValue, index, self) {
		returnArray.push([values[currValue], keys[currValue]]);
	}, returnArray);
	
	return returnArray;
}

/* --- Debug ---

updateInventory() should return an array.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
*/