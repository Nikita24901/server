const path = require("path");

var config = {
    entry: './code/index.js',
    output: {
      path: path.join(__dirname, "./bin"),
      filename: 'index.js',
      publicPath: "/",
      globalObject: 'global',
      library: "redage-clientside",
      libraryTarget: "umd" // exposes and know when to use module.exports or exports.
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    }
}

module.exports = config;