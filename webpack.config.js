const webpack = require('webpack');
module.exports = {
    entry: './scripts/scripts.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            }
        }],
    },
}