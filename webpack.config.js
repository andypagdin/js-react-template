const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    output: {
        filename: './index-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}