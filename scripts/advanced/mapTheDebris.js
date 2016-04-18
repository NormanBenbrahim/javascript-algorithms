/* --- Map The Debris ---

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.pow()

*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var return_array = [];
    
    // function for the conversion
    function orbit(a) {
        return Math.round(2*Math.PI*Math.sqrt(Math.pow(a + earthRadius, 3)/GM));
    }
    
    // loop through each array element
    arr.reduce(function(prevValue, currValue, index, self) {
        var curr_obj = {};
        curr_obj.name = currValue.name;
        var orbital = orbit(currValue.avgAlt);
        curr_obj.orbitalPeriod = orbital;
        return_array.push(curr_obj);
        
    }, return_array);
    
    return return_array;
}

/* --- Debug --- 

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
	should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

*/