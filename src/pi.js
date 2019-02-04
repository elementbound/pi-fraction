module.exports = class PiCalculator {
    constructor() {
        this.samples = 0
        this.hits = 0
    }

    sample(x, y) {
        const isHit = (Math.sqrt(x*x + y*y) < 1)

        this.hits += isHit ? 1 : 0
        this.samples++

        return isHit
    }

    get value() {
        return this.hits / this.samples
    }
}