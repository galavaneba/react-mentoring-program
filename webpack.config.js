const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env, options) {
	const isProduction = options.mode === "production";

	const config = {
		context: path.join(__dirname, "public"),
		entry: './javascripts/app.jsx',
		mode: isProduction ? "production" : "development",
		devtool: isProduction ? "none" : "source-map",
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}, {
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "less-loader"]
				})
			}]
		},
		resolve: {
			extensions: [".js", ".jsx"]
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: "App",
				hash: true,
				template: path.resolve(__dirname, "./public/index.html")
			}),
			new ExtractTextPlugin("styles.css")
		],
	};

	return config;
};
