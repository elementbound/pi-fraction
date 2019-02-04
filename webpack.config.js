const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    optimization: {
        minimizer: [
            new MinifyPlugin()
        ]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        })
    ]
}