const path = require('path')
const nodeExternals = require('webpack-node-externals')
const glob = require('glob')

module.exports = {
    entry: {
        ...getGlobsPaths('./src/components/**/index.{ts,tsx}'),
        ...getGlobsPaths('./src/lib/**/*.{ts,tsx}')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './[name].js',
        library: '',
        libraryTarget: 'commonjs'
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
                    'awesome-typescript-loader',
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
                            paths: [ path.resolve('src/styles/') ],
                            sourceMap: true,
                        },
                    },
                ]
            },
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
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
