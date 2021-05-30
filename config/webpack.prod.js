/* @type {import('webpack').Configuration} */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { frontConfig, backConfig } = require('./webpack.common');

const path = require('path');

const frontProdCfg = {
	mode: 'production',

	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.s?(css|ass)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader' /* , 'sass-loader' */],
			},
		],
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},

	plugins: [new MiniCssExtractPlugin()],
};

const backProdCfg = {
	mode: 'production',
};

module.exports = [
	merge(frontConfig, frontProdCfg),
	merge(backConfig, backProdCfg),
];
