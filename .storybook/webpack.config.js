const path = require('path')

module.exports = ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/typescript',
                            '@babel/react',
                        ],
                        plugins: [
                            ['styled-jsx/babel', { }]
                        ],
                    },
                },
                'tslint-loader',
            ],
            exclude: /node_modules/,
        },
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
