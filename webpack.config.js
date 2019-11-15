const path = require('path')

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/index.js'],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    output: {
        filename: './index.prod.js',
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
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        ]
    }
}