const PiCalculator = require('./pi')

/**
 * Take a sample and update values.
 * 
 * @param {PiCalculator} calculator calculator to use
 */
const update = calculator => {
    const point = [1 - 2 * Math.random(), 1 - 2 * Math.random()]
    calculator.sample(...point)

    console.log(calculator.samples, calculator.hits, calculator.value)
}

const loop = () => {
    const calculator = new PiCalculator()

    const tick = () => {
        update(calculator)
        window.requestAnimationFrame(tick)
    }

    tick()
}

window.onload = loop