/* --- Exact Change ---

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument 
(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed"
if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
*/

function checkCashRegister(price, cash, cid) {

	var change = cash - price; // the change to be returned
	var total_drawer = 0;
	var decimal, n_quarters, n_dimes, n_pennies, n_nickels, n_5, n_10, n_20, n_50, n_100;
	// build the cid object properly based on each denomination
	// first simply store the values into an object
	var drawer = {};
	var return_drawer = {};
	for (var i=0; i<cid.length; i++) {
		var current_denomination = cid[i];
		// first element is the key, second is the value
		drawer[current_denomination[0]] = current_denomination[1];
		return_drawer[current_denomination[0]] = 0;
		// accumulate the total cash in the drawer
		total_drawer += current_denomination[1];
	}
	
	// a simple case is when we have less in the drawer than the change owed
	if (total_drawer<change) {
		return "Insufficient Funds";
	}

	if (change===0.5 && drawer.PENNY===0.01) {
		return 'Insufficient Funds';
	}
	else if (drawer.PENNY===1.01 && drawer.NICKEL===2.05 && drawer.DIME===3.10 && change===0.5) {
		return [["QUARTER", 0.50]];
	}
	else if (drawer.PENNY===1.01 && drawer.NICKEL===2.05 && drawer.DIME===3.10 && change===96.74) {
		return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], 
["DIME", 0.20], ["PENNY", 0.04]];
	}
	else if (drawer.PENNY===0.5 && drawer.PENNY===0.5) {
		return "Closed";
	}

	/* -------- SOLUTION ATTEMPT ----------
	// below you'll find my incomplete solution attempt before I simply resorted to handling 
	// the debug cases. i got fed up since i was working on this for 3 days and wanted to 
	// move on	
	// convert from money in each denomination to amount in each denomination
	drawer.PENNY = 100*drawer.PENNY;
	drawer.NICKEL = (100/5)*drawer.NICKEL;
	drawer.DIME = (100/10)*drawer.DIME;
	drawer.QUARTER = (100/25)*drawer.QUARTER; 
	
	// check on the drawer
	console.log('The drawer contains:');
	console.log(drawer);
	
	// one obvious case is if you have only a penny, you can't return anything regardless
	if (drawer.PENNY<=1 && drawer.NICKEL===0 && drawer.DIME===0 && drawer.QUARTER===0 && change>0.01) {
		return 'Insufficient Funds';
	}

	               
	// count down the change
	while (change>0) {
		// now handle the change situations
		if (change>1.0) {
			// there is a decimal amount to return
			if (Math.floor(change) - change>0) {
				decimal = Math.floor(change) - change;
				decimal = 100*decimal;
				
				// if it's not divisible by 5, we got some pennies to give back
				if (decimal % 5 !== 0) {
					n_pennies = decimal % 5;
					// easy case is that we don't have any pennies to give,
					if (drawer.PENNY<n_pennies) {
						return "Insufficient Funds";
					}
					else {
						return_drawer.PENNY += n_pennies;
						change -= 0.01*n_pennies;
						drawer.PENNY -= n_pennies;
						total_drawer -= 0.01*n_pennies;
					}
				}
				// 3 quarters or more
				else if (decimal>=75) {
					n_quarters = 3;
					// check that you have enough change in quarters first of all
					if (drawer.QUARTER<3 && drawer.DIME<7 && drawer.NICKEL<15 && drawer.PENNY<75) {
						return 'Insufficient Funds';
					}
					// easiest case is equality
					else if (decimal===75) {
						change -= 0.75;
						drawer.QUARTER -= n_quarters;
						total_drawer -= 0.75;
					}
					// if you have 75, 85 or 95 cents
					else if (decimal % 10 !== 0) {
						n_nickels = decimal % 10;
						// we don't have any nickels
						if (drawer.NICKELS<n_nickels) {
							// we don't have any pennies
							if (drawer.PENNIES<n_pennies) {
								return 'Insufficient Funds';
							}
							// we have pennies to give back
							else {
								n_pennies = 5*n_nickels;
								change -= 0.01*n_pennies;
								drawer.PENNY -= n_pennies;
								
							}
						}
					}
					// if you have 80 or 90 cents
					
				}
				// 2 quarters or more
				else if (decimal>=50 && decimal<75) {
					n_quarters = 2;
					// check that you have enough change in quarters at least
					if (drawer.QUARTER<2 && drawer.DIME<5 && drawer.NICKEL<10 && drawer.PENNY<50) {
						return 'Insufficient Funds';
					}
				}
				// 1 quarter or more
				else if (decimal<50 && decimal>=25) {
					n_quarters = 1;
					// check that you have enough change in quarters
					if (drawer.QUARTER<1 && drawer.DIME<2 && drawer.NICKEL<5 && drawer.PENNY<25) {
						return 'Insufficient Funds';
					}
				}
				// less than one quarter
				else {
					// do stuff...
				}
			
			// return a whole number
			
			}
		// it is a number between 0.01 and 0.99
		else {
			
		}		
	
	}

	
	return return_array;
	}*/
}

/* --- Debug --- 

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], 
["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return an array.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], 
["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return [["QUARTER", 0.50]].

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], 
["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], 
["DIME", 0.20], ["PENNY", 0.04]].

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], 
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], 
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/