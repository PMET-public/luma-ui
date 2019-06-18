import typescript from 'rollup-plugin-typescript2'
import less from 'rollup-plugin-less'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import execute from 'rollup-plugin-execute'
import glob from 'glob'
import path from 'path'

const fromSrcToDist = (srcPath, cb) => glob
    .sync(path.resolve('./src', srcPath))
    .reduce((acc, file) => [
        ...acc,
        cb({
            inputFile: file,
            outputDir: './dist/' + path.parse(file).dir.split('src/')[1],
        })
    ], [])

const plugins = (src) => [
    typescript(),
    less({
        insert: true,
        output: false,
        option: {
            paths: './src/theme/variables'
        }
    }),
    builtins(),
    nodeResolve({
        preferBuiltins: false,
    }),
    commonjs({
        include: /node_modules/,
    }),
    execute([ `yarn tsc --declaration --emitDeclarationOnly --rootDir ./src --jsx react --esModuleInterop --outDir ./dist ${src}` ])
]


const output = {
    dir: './dist',
    format: 'umd',
    exports: 'named',
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
    }
}

const external = [
    'react',
    'react-dom',
    'prop-types',
]

export default [
    ...fromSrcToDist('components/**/index.ts', ({ inputFile, outputDir }) => (
        {
            input: inputFile,
            output: {
                ...output,
                name: 'components',
                dir: outputDir,
            },
            plugins: plugins(inputFile),
            external,
        }
    )),
    ...fromSrcToDist('lib/**/*.{ts,tsx,js,jsx}', ({ inputFile, outputDir }) => (
        {
            input: inputFile,
            output: {
                ...output,
                name: 'lib',
                dir: outputDir,
            },
            plugins: plugins(inputFile, outputDir),
            external,
        }
    )),
    ...fromSrcToDist('hooks/**/*.{ts,tsx,js,jsx}', ({ inputFile, outputDir }) => (
        {
            input: inputFile,
            output: {
                ...output,
                name: 'hooks',
                dir: outputDir,
            },
            plugins: plugins(inputFile, outputDir),
            external,
        }
    )),
    ...fromSrcToDist('theme/index.ts', ({ inputFile, outputDir }) => (
        {
            input: inputFile,
            output: {
                ...output,
                name: 'theme',
                dir: outputDir,
            },
            plugins: plugins(inputFile, outputDir),
            external,
        }
    )),
]
