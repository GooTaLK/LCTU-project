/* @type {import('webpack').Configuration} */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { frontConfig, backConfig } = require('./webpack.common');

const path = require('path');

const frontProdCfg = {
	mode: 'production',

	devtool: 'source-map',

	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
};

const backProdCfg = {
	mode: 'production',
};

module.exports = [
	merge(frontConfig, frontProdCfg),
	merge(backConfig, backProdCfg),
];
