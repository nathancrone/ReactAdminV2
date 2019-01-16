const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: { 'main': './assets/js/app.js' },
    output: {
        path: path.resolve(__dirname, 'wwwroot/assets/js'),
        filename: 'bundle.js', 
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [

    ]
};