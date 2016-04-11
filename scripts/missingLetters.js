/* --- Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
	// first make all lowercase 
	str = str.toLowerCase();
	var currentCode, nextCode;
	
	// codes for the lowercase alphabet go from 97 - 122
	for (i = 0; i<str.length-1; i++) {
		currentCode = str.charCodeAt(i);
		nextCode = str.charCodeAt(i+1);
		if (nextCode !== currentCode + 1) {
			return String.fromCharCode(currentCode + 1);
		}
		
	}
	// default undefined if all is well
	return undefined;
}

/* --- Debug 

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/