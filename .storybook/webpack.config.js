const path = require('path')

module.exports = ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                'awesome-typescript-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'less-loader', // compiles Less to CSS
            ]
        }
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
