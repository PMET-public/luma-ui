const path = require('path')

module.exports = ({ config }) => {

    config.resolve.alias = {
        ...config.resolve.alias,
        'src': path.resolve(__dirname, '../src'),
    }

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
        ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}