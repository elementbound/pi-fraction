/**
 * Check if `a` is divisible `b`.
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {boolean} `true` if divisible, `false` otherwise
 */
const isDivisible = (a, b) => 
    (a / b) == (a / b | 0)

const isPrime = (x, previousPrimes) => 
    previousPrimes.some(prime => !isDivisible(x, prime))

function* primes() {
    const primes = [2]

    yield 2
    for(let i = 3; true; i++) {
        if(isPrime(i, primes)) {
            yield i
            primes.push(i)
        }
    }
}

module.exports = {
    isDivisible,
    primes
}