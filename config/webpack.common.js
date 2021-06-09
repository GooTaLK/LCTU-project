/* @type {import('webpack').Configuration} */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const frontConfig = {
	entry: './src/client/src/index.js',

	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: '[name]-bundle.js',
		assetModuleFilename: '[name][ext]',
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

			{
				test: /\.png$/i,
				type: 'asset/resource',
			},

			{
				test: /\.(s?css|sass)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// options: { publicPath: './client' },
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/client/public/index.html',
		}),
	],
};

const backConfig = {
	entry: './src/server/index.js',

	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'index.js',
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
