/* --- Validate US Telephone Numbers ---

Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
*/

function telephoneCheck(str) {
    var re1, re2, re3, re4, re5, re; // initialize some variables	

	// easiest case to check is if there are letters
	if (str.match(new RegExp(/[a-zA-Z]/, 'g') )!==null) {
		return false;
	}
    // another easy one is if there aren't between 10 and 11 digits
    else if (str.match(new RegExp(/[0-9]/, 'g')).length<10 || str.match(new RegExp(/[0-9]/, 'g')).length>11 ) {
        return false;
    }
    // if there are 10 digits, we build expressions and combine them
    else if (str.match(new RegExp(/[0-9]/, 'g') ).length===10) {
        // build allowable expressions, 5 total
        re1 = new RegExp(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
        re2 = new RegExp(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/);
        re3 = new RegExp(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/);
        re4 = new RegExp(/^[0-9]{10}$/);
        re5 = new RegExp(/^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/);
      
        // make one large regex condition
        re = new RegExp(re1.source + '|' + re2.source + '|' + re3.source + '|' + re4.source + '|' + re5.source);
        
        //match it 
        if (str.match(re)!==null) {
          return true;
        }
        else {
          return false;
        } 
    }
    //similarly if there are 11 digits
	else if (str.match(new RegExp(/[0-9]/, 'g')).length===11) {
		//build allowable expressions
        re1 = new RegExp(/^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/);
        re2 = new RegExp(/^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/);
        re3 = new RegExp(/^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
        re4 = new RegExp(/^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/);
        re5 = new RegExp(/^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/);
        
        // make one large regex condition
        re = new RegExp(re1.source + '|' + re2.source + '|' + re3.source + '|' + re4.source + '|' + re5.source);
		
		// match it 
		if (str.match(re)!==null) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
	
}

/* --- Debug ---

telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6505552368)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.

*/