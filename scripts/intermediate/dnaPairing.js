/* --- DNA Pairing ---

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()
String.split()
*/

function pairElement(str) {
	var result = [];
	// a <-> t
	// g <-> c
	for (letter = 0; letter<str.length; letter++) {
		var toStore = [];
		toStore.push(str[letter]);
		
		switch(str[letter]) {
			case 'A':
				toStore.push('T');
				break;
			case 'T':
				toStore.push('A');
				break;
			case 'G':
				toStore.push('C');
				break;
			case 'C':
				toStore.push('G');
				break;
		}
		
		result.push(toStore);
	}
	
	return result;
}

/*--- Debug ---

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/