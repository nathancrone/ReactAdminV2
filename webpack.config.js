const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: { 'react_admin': './assets/js/react_admin/Main.js' },
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
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|prop-types)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [

    ]
};