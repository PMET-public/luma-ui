const path = require('path')

module.exports = ({ config }) => {

    // https://github.com/storybookjs/storybook/issues/5708
    config.module.rules.forEach(function(data, key) {
        if (data.test.toString().indexOf('svg|') >= 0) {
            config.module.rules[key].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
            return false
        }
    })

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
                            ['styled-jsx/babel', { 
                                plugins: ['styled-jsx-plugin-postcss'] 
                            }]
                        ],
                    },
                },
                'tslint-loader',
            ],
            exclude: /node_modules/,
        },

        /** 
         * SVG Inline
         */
        {
            test: /\.svg$/,
            use: 'react-svg-loader',
        },

    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
