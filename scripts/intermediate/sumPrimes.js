/* --- Sum All Primes ---

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.push()
*/

function sumPrimes(numb) {
    var sieve = [], i, j;
    var primes = 0;
    for (i = 2; i <= numb; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes += i;
            for (j = i << 1; j <= numb; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}


/* --- Debug ---

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/