/* --- Convert HTML Entities 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
*/
function convertHTML(str) {
	// the special characters
	var special_chars = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};

	for (var key in special_chars) {
		str = str.replace(new RegExp('[' + key + ']', 'g'), special_chars[key]);
	}

	return str;
}

/* --- Debug ---

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/