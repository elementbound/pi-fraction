/**
 * Draw a line between two points.
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {Array<Number>} from 
 * @param {Array<Number>} to 
 */
function drawLine(context, from, to) {
    context.beginPath()
    context.moveTo(...from)
    context.lineTo(...to)
    context.closePath()
    context.stroke()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {*} at 
 * @param {*} r 
 */
function drawCircle(context, at, r) {
    context.beginPath()
    context.ellipse(...at, r, r, 0, 0, 360)
    context.closePath()
    context.fill()
}

module.exports = {
    /**
     * Setup context for drawing.
     * 
     * @param {HTMLCanvasElement} canvas canvas
     */
    init: function init(canvas) {
        return {
            canvas: canvas,
            context: canvas.getContext('2d'),
            size: [canvas.width, canvas.height]
        }
    },

    drawBackground: function drawBackground(drawingContext) {
        const { size, context } = drawingContext
        const [width, height] = size

        context.lineWidth = 0.25

        drawLine(context, [width/2, 0], [width/2, height])
        drawLine(context, [0, height/2], [width, height/2])
    },

    drawSample: function drawSample(drawingContext, point, hit) {
        const { size, context } = drawingContext
        const [width, height] = size

        const drawnPoint = [
            ( 1 + point[0] ) / 2 * width,
            ( 1 + point[1] ) / 2 * height
        ]

        context.fillStyle = hit ? 'green' : 'red'
        drawCircle(context, drawnPoint, 1)
    }
}