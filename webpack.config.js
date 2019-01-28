const webpack = require('webpack');

module.exports = {
    // Our entrypoint - The first file that will be loaded
    // Modules loaded by our index.js or by its dependencies (e.g., 
    // modules that are loaded by our index.js) will be included on
    // the output bundle.
    //
    // ANY FILE not being loaded by our index.js or its dependencies
    // won't be included on the output bundle.
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