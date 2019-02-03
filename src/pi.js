module.exports = class PiCalculator {
    constructor() {
        this.samples = 0
        this.hits = 0
    }

    sample(x, y) {
        this.hits += (Math.sqrt(x*x + y*y) < 1) ? 1 : 0
        this.samples++ 
    }

    get value() {
        return this.hits / this.samples
    }
}