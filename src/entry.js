const PiCalculator = require('./pi')
const bind = require('./bind')

/**
 * Take a sample and update values.
 * 
 * @param {PiCalculator} calculator calculator to use
 */
const update = calculator => {
    const point = [1 - 2 * Math.random(), 1 - 2 * Math.random()]
    calculator.sample(...point)
}

const loop = () => {
    const calculator = new PiCalculator()
    const bindings = bind.find(document)

    const tick = () => {
        update(calculator)

        const data = {
            raw: {
                top: calculator.hits,
                bottom: calculator.samples,
            },

            // Same as raw, for now
            simplified: {
                top: calculator.hits,
                bottom: calculator.samples,
            },

            value: calculator.value
        }

        bind.update(bindings, data)

        window.requestAnimationFrame(tick)
    }

    tick()
}

window.onload = loop