const webpack =require('webpack');
const path =require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');


process.env.NODE_ENV = 'development' | 'production'

module.exports = {
    node: {
        global: true,
        process: true,
    },
    target: 'web',
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath:'/',
        filename: 'bundel.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    externals: ['fs'],
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|tf|eot|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new copyPlugin([
            {from: path.join(__dirname, '/public', '/CSS'), to: path.join(__dirname, '/build', '/CSS')}
        ]),
        new Dotenv(),
        new webpack.EnvironmentPlugin(['BASE_URL', 'NODE_ENV'])
    ],
    devtool: 'none',
    devServer:{
        port: 8080,
        stats: 'minimal',
        overlay:{
            warnings: true,
            errors: true
        },
        headers: {'Access-Control-Allow-Origin': '*'},
        open: 'Google Chrome',
        historyApiFallback: true
    }
}
