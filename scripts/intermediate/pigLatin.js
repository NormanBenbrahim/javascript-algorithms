/* --- Pig Latin ---

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()
*/

function translatePigLatin(str) {
	var vowels = 'aeiouy'
	var index = [];

	//loop through each letter in the str
	for (i=0; i<str.length; i++) {
		for (j = 0; j<vowels.length; j++) {
  			if (str[i]===vowels[j]) {
  				// then this index (i) will be where you 'split' the word
  				// just record all the indices where it's a vowel
  				index.push(i);
  			}
  			
		}
		
	}
	
	// the first appearance of a vowel
	var ind = index[0];
	
	if (ind===0) {
		return str + "way"
	} 
	else {
		return str.slice(ind) + str.slice(0, ind) + 'ay'
	}
	
}


/* --- Debug --- 
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".

*/