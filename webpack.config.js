var path = require('path');

var config = {
    context: path.resolve('public/js'),

    entry: {
        app: './app'
    },

    output: {
        path: path.resolve('./web/js'),
        publicPath: '/js/',
        filename: "build.js"
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.resolve('public/js'),
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    noParse: /\/node_modules\/react\/dist\/react\.min\.js/
};

module.exports = config;
