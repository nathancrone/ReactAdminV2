const webpack = require('webpack');
const path = require('path');
const moduleList = ["react", "react-dom"];

module.exports = {
    mode: 'development',
    entry: { 'app': './assets/js/app.js' },
    output: {
        path: path.resolve(__dirname, 'wwwroot/assets/js'),
        filename: '[name].bundle.js', 
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
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [

    ]
};