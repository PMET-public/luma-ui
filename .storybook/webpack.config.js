const path = require('path')

module.exports = ({ config }) => {
    
    // Add Welcome Story
    config.entry.push(path.resolve('./.storybook/welcome.tsx'))

    // https://github.com/storybookjs/storybook/issues/5708
    config.module.rules.forEach(function(data, key) {
        if (data.test.toString().indexOf('svg|') >= 0) {
            config.module.rules[key].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
            return false
        }

        if (data.test.toString().indexOf('css') >= 0) {
            config.module.rules[key] = {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'isomorphic-style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // modules: true,
                            modules: {
                                localIdentName: '[name]-[local]___[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ],
            }
            
            return false
        }
    })

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                'babel-loader',
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
