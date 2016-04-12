/* --- Roman Numeral Converter ---
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()

*/



// V is 5 and v is 5000, X is 10 and x is 10000, etc. it's hard to put a bar over the numerals
// when working with unicode or whatever javascript's encoding is
function convertToRoman(num) {
	// i handled all numbers from 1 to 10000, however the algorithm is fairly 
	// straightforward to implement for any number of integers you just need to count in
	// multiples of 10 and break down the number by addition
	// eg, 3462 = 3000 + 400 + 60 + 2  =>  MMM + CD + LX + II = MMMCDLXII
	
	// another way i thought of doing but was too lazy to implement would be to take
	// log(num). this would increase efficiency for sure

	// initialize 
	var roman = [];
	var str, count;
 	
	// create a string out of the number to access each digit by index
	var num_str = num.toString();
	var k = num_str.length;

	for (n = num_str.length; n>0; n--) {
		// get trailing 0's 
		var zeros = "0".repeat(n-1);
		// grab the element in question
		var numb = Number(num_str[k-n] + zeros);
		
		// apply the functions depending on the magnitude of the number
		if (n>=4) {
			str = thousands(numb);
			count = roman.push(str);
		}
		else if (n==3) {
			str = hundreds(numb);
			count = roman.push(str);
		}
		else if (n==2) {
			str = tens(numb);
			count = roman.push(str);
		}
		else if (n==1) {
			str = singles(numb);
			count = roman.push(str);
		}
	}
	return roman.join("");

}


// function for the numbers 1-9
function singles(n) {
	switch(n) {
		case 1:
			return "I";
		case 2:
			return "II";
		case 3:
			return "III";
		case 4:
			return "IV";
		case 5:
			return "V";
		case 6:
			return "VI";
		case 7:
			return "VII";
		case 8:
			return "VIII";
		case 9:
			return "IX";
		case 0:
			return "";
	}
}

// function for the numbers 10-90 in multiples of 10
function tens(n) {
	switch(n) {
		case 10: 
			return "X";
		case 20:
			return "XX";
		case 30:
			return "XXX";
		case 40:
			return "XL";
		case 50:
			return "L";
		case 60:
			return "LX";
		case 70:
			return "LXX";
		case 80:
			return "LXXX";
		case 90:
			return "XC";
		case 0:
			return "";
	}
}

// function for the numbers 100-900 in multiples of 100
function hundreds(n) {
	switch(n) {
		case 100:
			return "C";
		case 200:
			return "CC";
		case 300:
			return "CCC";
		case 400:
			return "CD";
		case 500:
			return "D";
		case 600:
			return "DC";
		case 700:
			return "DCC";
		case 800:
			return "DCCC";
		case 900:
			return "CM";
		case 0:
			return "";
	}
}

// function for the numbers 1000 to 10000 in multiples of 1000
function thousands(n) {
	switch(n) {
		case 1000:
			return "M";
		case 2000:
			return "MM";
		case 3000:
			return "MMM";
		case 4000:
			return "Mv";
		case 5000:
			return "v";
		case 6000:
			return "vM";
		case 7000:
			return "vMM";
		case 8000:
			return "vMMM";
		case 9000:
			return "vMMM";
		case 10000:
			return "x";
		case 0:
			return "";
	}
}


/* --- Debug ---
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"

*/