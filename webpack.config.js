const path = require('path');

const config = {
    context: path.resolve('src/js'),

    entry: {
        app: './app'
    },

    output: {
        path: path.resolve('./build/js'),
        publicPath: '/js/',
        filename: 'build.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.resolve('src/js'),
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
