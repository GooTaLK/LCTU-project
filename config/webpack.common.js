/* @type {import('webpack').Configuration} */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

const path = require('path');

const frontConfig = {
	entry: './src/public/index.js',

	output: {
		path: path.resolve(__dirname, '../dist/public'),
		filename: '[name]-bundle.[contenthash].js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									corejs: 3.13,
									useBuiltIns: 'usage',
									targets: '> 0.25%, not dead, not ie 11',
								},
							],
							[
								'@babel/preset-react',
								{
									runtime: 'automatic',
								},
							],
						],
					},
				},
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
		}),
	],
};

const backConfig = {
	entry: './src/server/index.js',

	output: {
		path: path.resolve(__dirname, '../dist/server'),
		filename: '[name]-bundle.[contenthash].js',
	},

	target: 'node',

	externals: [webpackNodeExternals()],

	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										node: '14.11.0',
										esmodules: false,
									},
								},
							],
						],
					},
				},
			},
		],
	},
};

module.exports = {
	frontConfig,
	backConfig,
};
