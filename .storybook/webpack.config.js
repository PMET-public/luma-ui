const path = require('path')

module.exports = ({ config }) => {
    
    // Add Welcome Story
    config.entry.push(path.resolve('./.storybook/welcome.tsx'))

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            use: [
                'babel-loader',
                'tslint-loader',
            ],
            exclude: /node_modules/,
        },
    )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
