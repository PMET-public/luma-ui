const path = require('path')

module.exports = ({ config }) => {

    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            'awesome-typescript-loader',
        ],
        exclude: /node_modules/,
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
