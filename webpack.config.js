const path = require('path')
const nodeExternals = require('webpack-node-externals')
const glob = require('glob')

module.exports = {
    entry: {
        ...getGlobsPaths('./src/components/**/index.{ts,tsx}'),
        ...getGlobsPaths('./src/lib/**/*.{ts,tsx}'),
        styles: './src/styles'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './[name].js',
        library: 'Storybook',
        libraryTarget: 'umd',
        globalObject: 'this',
    },

    externals: [nodeExternals()],

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            declaration: true,
                        },
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
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
                            paths: [path.resolve('src/styles/variables')],
                            sourceMap: true,
                        },
                    },
                ]
            },
        ]
    },

    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
    },
}

/**
 * Get Entry Paths
 * @param {*} path 
 */
function getGlobsPaths(path) {
    const regex = /\.\/src\/(.*)\.tsx?$/

    return glob.sync(path)
        .reduce((obj, item) => ({
            ...obj,
            [item.match(regex)[1]]: item
        }), {})
}
