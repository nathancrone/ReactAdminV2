const webpack = require('webpack');
var extractText = require('extract-text-webpack-plugin');
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
                test: /\.s?css$/,
                use: extractText.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "sass-loader"]
                })
            }, 
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader', 
                options: {
                    name: '../fonts/[name].[ext]?[hash]',
                    publicPath: '/'
                }
            }, 
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
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|prop-types|redux|react-redux|react-router-redux)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    plugins: [
        new extractText({
            filename: '../css/styles.bundle.css'
        }),
    ]
};