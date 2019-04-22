const path = require('path');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        app: ['@babel/polyfill', path.join(__dirname, 'src/entry.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new MiniCssExtractTextPlugin({
            filename: '[name].bundle.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractTextPlugin.loader,
                        options: {
                            publicPath: '/dist',
                        }
                    },
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
};