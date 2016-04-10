/* --- Where art thou ---

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.hasOwnProperty()
Object.keys()

*/

function whereAreYou(collection, source) {
	// What's in a name?
	var arr = [];
  
	// Only change code below this line
	// loop through the source object's key-value pairs one by one
	var source_keys = Object.keys(source);
  
	for (i = 0; i<source_keys.length; i++) {
        var current_property = source_keys[i];
        var current_value = source[current_property];
        
      	for (j = 0; j<collection.length; j++) {
			var current_object = collection[j];
			
			if (current_object.hasOwnProperty(current_property)) {
				if (current_value===current_object[current_property]) {
					arr.push(current_object);
				}
			}
			
		}
	}
  
	// Only change code above this line
	return arr;
}




/* --- Debug ---

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].

*/