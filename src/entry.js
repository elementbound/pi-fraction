const PiCalculator = require('./pi')
const bind = require('./bind')
const simplify = require('./simplify')
const canvas = require('./canvas')

const ITERATIONS_PER_TICK = 64

const loop = () => {
    const calculator = new PiCalculator()
    const bindings = bind.find(document)
    const drawingContext = canvas.init(document.querySelector('canvas'))

    canvas.drawBackground(drawingContext)

    const tick = () => {
        for(let i = 0; i < ITERATIONS_PER_TICK; ++i) {
            const point = [1 - 2 * Math.random(), 1 - 2 * Math.random()]
            const hit = calculator.sample(...point)

            canvas.drawSample(drawingContext, point, hit)
        }

        const data = {
            raw: {
                denominator: calculator.hits * 4,
                divisor: calculator.samples,
            },

            simplified: simplify(calculator.hits * 4, calculator.samples),

            value: calculator.value * 4,
            difference: Math.PI - calculator.value * 4
        }

        bind.update(bindings, data)

        window.requestAnimationFrame(tick)
    }

    tick()
}

window.onload = loop