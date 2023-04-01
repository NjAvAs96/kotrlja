const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const IconfontPlugin = require('iconfont-plugin-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

const copyPaterns = [
	{
		from: './src/assets',
		to: path.resolve(__dirname, './dist/assets')
	},
	{
		from: './src/favicon',
		to: path.resolve(__dirname, './dist/favicon')
	},
	{
		from: '*.html',
		to: path.resolve(__dirname, './dist'),
		context: './src/',
	},
];

module.exports = {
	mode: 'development',
	entry: [
		'./src/scss/style.scss',
		'./src/js/script.js',
	],
	output: {
		filename: 'js/script.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						url: false
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								'autoprefixer',
							]
						}
					}
				},
				'sass-loader',
			]
		},],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/style.css"
		}),
		new StylelintPlugin({
			configFile: '.stylelintrc.json',
		}),
		new IconfontPlugin({
			src: './src/assets/icons',
			family: 'icon-font',
			dest: {
				font: './src/assets/fonts/[family].[type]',
				css: './src/scss/layout/_icon-font.scss',
			},
			watch: {
				pattern: './src/assets/icons/*.svg',
				cwd: undefined
			}
		}),
		new CopyPlugin({
			patterns: copyPaterns
		})
	],
}