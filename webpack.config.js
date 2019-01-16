const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/assets/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ], 
    module: {
        rules: [{
            test: /\.js?$/,
            use: {
                loader: 'babel-loader', options: {
                    presets: ['babel-preset-es2015']
                }
            }
        }]
    }
};