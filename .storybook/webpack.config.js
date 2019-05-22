const path = require('path')

module.exports = ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                'awesome-typescript-loader',
                'tslint-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
