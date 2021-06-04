const path = require('path');
const MiniCssExtractTextPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = env => {
    const {
        mode,
        watch,
    } = env;

    return {
        entry: {
            app: [path.join(__dirname, 'src/entry.js')]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].bundle.js',
        },
        plugins: [
            new MiniCssExtractTextPlugin({
                filename: '[name].[hash].bundle.css',
            }),
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'template.html'),
            }),
            new CleanWebpackPlugin({
                verbose: true,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: MiniCssExtractTextPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                        },
                    ],
                },
                {
                    test: /\.(mp4|jpeg|png|jpg|)$/,
                    use: ['file-loader'],
                }
            ],
        },
        mode,
        watch,
    };
};
