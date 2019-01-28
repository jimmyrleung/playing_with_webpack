const webpack = require('webpack');

module.exports = {
    // Our entrypoint - The first file that will be loaded
    entry: './app/index.js',

    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    // Our development server
    devServer: {
        port: 8080,
        // Which folder our dev server should look for the files
        contentBase: './public'
    }
}