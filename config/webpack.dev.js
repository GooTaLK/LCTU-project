/* @type {import('webpack').Configuration} */

const ReactRefresWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { merge } = require('webpack-merge');
const { frontConfig, backConfig } = require('./webpack.common');

const path = require('path');

const frontDevCfg = {
	mode: 'development',

	devtool: 'eval-source-map',

	target: 'web',

	// devServer: {
	// 	port: 3001,
	// 	contentBase: '../dist/',
	// 	open: 'edge',
	// 	hot: true,
	// },

	plugins: [new HotModuleReplacementPlugin(), new ReactRefresWebpackPlugin()],
};

const backDevCfg = {
	mode: 'development',
	plugins: [new NodemonPlugin()],
};

module.exports = [
	merge(frontConfig, frontDevCfg),
	merge(backConfig, backDevCfg),
];
