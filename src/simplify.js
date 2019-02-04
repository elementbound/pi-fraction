const { primes, isDivisible } = require('./primes')

module.exports = function simplify(denominator, divisor) {
    const result = {denominator, divisor}
    const maxValue = Math.sqrt(Math.max(denominator, divisor))

    let found = true

    while(found) {
        found = false

        for(let prime of primes()) {
            if(prime > maxValue) {
                break
            }

            if(isDivisible(result.denominator, prime) && isDivisible(result.divisor, prime)) {
                result.denominator /= prime
                result.divisor /= prime
                found = true
                break
            }
        }
    }

    return result
}