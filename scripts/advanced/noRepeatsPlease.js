/* --- No repeats please ---

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that
all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them 
(aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
*/

function permAlone(str) {
	// the easiest case is all letters in str are the same, in which case return 0
	var first = str[0];
	var re = new RegExp('^' + first + '*' + '$');
	if (str.match(re)!==null) {
		return 0;
	}
	// otherwise there's work to do
	
	// initialize variables
    var total = 0, firsts = "", repeats = "";	
	
	// first define some helper functions
    // string permutator (after Filip Nguyen)
    function stringPermutator(str) {
        var fact = [1], permutations = [];
        for (var i = 1; i <= str.length; i++) fact[i] = i * fact[i - 1];
        for (i = 0; i < fact[str.length]; i++) {
            var perm = "", temp = str, code = i;
            for (var pos = str.length; pos > 0; pos--) {
                var sel = code / fact[pos - 1];
                perm += temp.charAt(sel);
                code = code % fact[pos - 1];
                temp = temp.substring(0, sel) + temp.substring(sel + 1);
            }
            permutations.push(perm);
        }
        return permutations;
    }	
	
    // RECURSIVE CHARACTER INSERTER
    function insertRepeats(firsts, repeats) {
        var pos = -1;
        for (var i = 0; i < firsts.length, pos < 0; i++) {
            pos = repeats.indexOf(firsts.charAt(i));
        }
        var char = repeats.charAt(pos);
        for (i = firsts.indexOf(char) + 2; i <= firsts.length; i++) {
            var combi = firsts.slice(0, i) + char + firsts.slice(i);
            if (repeats.length > 1) {
                insertRepeats(combi, repeats.slice(0, pos) + repeats.slice(pos + 1));
            } else {
                ++total;
            }
        }
    }	
    
    // the algorithm
    for (var i = 0; i < str.length; i++) {
        char = str[i];
        if (str.indexOf(char) == i) {
        	firsts += char;
        }
        else {
        	repeats += char;
        }
    }
    firsts = stringPermutator(firsts);
    for (i = 0; i < firsts.length; i++) {
        insertRepeats(firsts[i], repeats);
    }
    
    return Math.pow(2, repeats.length) * total;

}

/* --- Debug ---

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
*/