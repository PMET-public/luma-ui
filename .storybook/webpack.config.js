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
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        paths: [ path.resolve('src/styles/variables') ],
                        sourceMap: true,
                    },
                },
            ]
        },
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
