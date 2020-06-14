const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry: './browser/index.js',
     
    output: {
      path: path.join(__dirname, "./bin/interface"),
      filename: "core.js",
      publicPath: "/",
    },
     
    devServer: {
        inline: true,
        port: 3000
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },
     
    module: {
        //use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
        //use: 'file-loader'
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            return '[path]/[name].[ext]';
                        }
                    }
                }]
            },
            {
			    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            return '[path]/[name].[ext]';
                        }
                    }
                }]
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./browser/index.html",
            query: '?' + new Date().getTime(),
            filename: 'index.html',
            inject: false,
        }),
    ]
}

module.exports = config;