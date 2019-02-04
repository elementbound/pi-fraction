const PiCalculator = require('./pi')
const bind = require('./bind')
const simplify = require('./simplify')
const canvas = require('./canvas')

const ITERATIONS_PER_TICK = 128

const controls = (onplay, onpause) => {
    document.querySelector('button.play').onclick = onplay
    document.querySelector('button.pause').onclick = onpause
}

const loop = () => {
    const calculator = new PiCalculator()
    const bindings = bind.find(document)
    const drawingContext = canvas.init(document.querySelector('canvas'))

    let isTicking = true

    controls(
        () => isTicking = true,
        () => isTicking = false
    )

    canvas.drawBackground(drawingContext)

    const tick = () => {
        window.requestAnimationFrame(tick)

        if(!isTicking)
            return

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
    }

    tick()
}

window.onload = loop