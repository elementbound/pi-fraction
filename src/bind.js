const mustache = require('mustache')

/**
 * Find DOM elements with bindings.
 * 
 * @param {Document} document document
 */
const findBindings = document => 
    [...document.querySelectorAll('.bind')].map(element => ({
        element: element,
        template: element.innerText
    }))

/**
 * Render each bound element with the given data.
 * 
 * @param {Array<any>} bindings bindings
 * @param {any} data data
 */
const updateBindings = (bindings, data) =>
    bindings.forEach(({element, template}) => 
        element.innerText = mustache.render(template, data)
    )

module.exports = {
    find: findBindings,
    update: updateBindings
}