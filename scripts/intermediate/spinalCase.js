/* --- Spinal Tap Case ---

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.replace()
*/

function spinalCase(str) {
	// the first letter either gets lowercase or doesn't change, so we can
	// omit it and worry about it later
	var first_letter = str[0];
	var str_to_match = str.slice(1);
	
	// create the regular expression condition
	// we want to replace underscores and spaces with dashes 
	var re = new RegExp('_| ', 'g');
	var spinal = str_to_match.replace(re, '-');
	
	// if there were no underscores or spaces that means it was camel case or already 
	// spinal case. either way we need to make sure with a second regexp
	// neat thing: put groups in brackets to access them as 'variables', see below
	spinal = spinal.replace(new RegExp(/([a-z])([A-Z])/, 'g'), "$1-$2");
	spinal = spinal.toLowerCase();
	
	// add the first letter back
	final = first_letter.toLowerCase() + spinal;
	
	// if it was separated
	return final;
}

/*

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/