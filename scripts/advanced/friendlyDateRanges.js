/* --- Friendly Date Ranges ---

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year 
from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the 
beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split()
String.substr()
parseInt()
*/

function makeFriendlyDates(arr) {
	
	var d1 = arr[0], d2 = arr[1];
	
	// note year 1 is always smaller than year 2, but make sure just in case
	d1 = d1.split('-'), d2 = d2.split('-');
	if (parseInt(d2[0])<parseInt(d1[0])) {
		d1 = arr[1];
		d2 = arr[0];
	} 	
	
	var year1 = parseInt(d1[0]), month1 = parseInt(d1[1]), day1 = parseInt(d1[2]);
	var year2 = parseInt(d2[0]), month2 = parseInt(d2[1]), day2 = parseInt(d2[2]);
	var return_array = [];
	
	// handle the cases for the date. easiest one is when both are the exact same
	if (year1===year2 && month1===month2 && day1===day2) {
		return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]) + ', ' + d1[0]);
	}
	// another easy one is same year same month
	else if (year1===year2 && month1===month2) {
		return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]));
		return_array.push(dayConvert(d2[2]));
	}
	// if the date ends in less than a year from when it begins, don't display end year
	else if (year2 - year1 === 1) {
		if (12 - month1 + month2 < 12) { // less than a year
			
			return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]));
			return_array.push(monthConvert(d2[1]) + ' ' + dayConvert(d2[2]));
		}
		else if (12 - month1 + month2===12) { // exactly a year
			// this means month1==month2, check that the days add up to at least a year
			if (day2<day1) {
				return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]) + ', ' + d1[0]);
				return_array.push(monthConvert(d2[1]) + ' ' + dayConvert(d2[2]));
			}
			else {
				return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]) + ', ' + d1[0]);
				return_array.push(monthConvert(d2[1]) + ' ' + dayConvert(d2[2]) + ', ' + d2[0]);
			}
		}
		
	}
	// more than a year apart
	else if (year2 - year1 > 1) {
		return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]) + ', ' + d1[0]);
		return_array.push(monthConvert(d2[1]) + ' ' + dayConvert(d2[2]) + ', ' + d2[0]);
	}
	// less than a year apart
	else {
		return_array.push(monthConvert(d1[1]) + ' ' + dayConvert(d1[2]) + ', ' + d1[0]);
		return_array.push(monthConvert(d2[1]) + ' ' + dayConvert(d2[2]));
	}
	
	
	
	// helper function to convert months in numbers to actual months
	function monthConvert(month) {
		switch(month) {
			case '01':
				return 'January';
			case '02':
				return 'February';
			case '03':
				return 'March';
			case '04':
				return 'April';
			case '05':
				return 'May';
			case '06':
				return 'June';
			case '07':
				return 'July';
			case '08':
				return 'August';
			case '09':
				return 'September';
			case '10':
				return 'October';
			case '11':
				return 'November';
			case '12':
				return 'December';
		}
	}
	
	// helper function to convert the day into a pretty day (i.e. 1 into 1st, 2 into 2nd, etc)
	function dayConvert(day) {
		day = parseInt(day);
		
		// just handle the cases for numbers 1-31
		if (day===1 || day===21 || day===31) {
			return day + 'st';
		}
		else if (day===2 || day===22) {
			return day + 'nd';
		}
		else if (day===3 || day===23) {
			return day + 'rd';
		}
		else {
			return day + 'th';
		}
	}
	
	return return_array;
}

/* --- Debug ---

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/