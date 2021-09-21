const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const json5 = require('json5')
module.exports = {
	mode: "development",
	entry: "./main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				],
			},
			{
				test: /\.json5$/,
				type: "json",
				parser: {
					parse: json5.parse,
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack task",
			template: path.join(__dirname, 'template', 'index.html')
		})
	]
}
