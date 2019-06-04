import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import less from 'rollup-plugin-less'
import glob from 'glob'
import path from 'path'

const fromSrcToDist = (srcPath, cb) => glob
    .sync(path.resolve('./src', srcPath))
    .reduce((acc, file) => [
        ...acc,
        cb({
            inputFile: file,
            outputDir: path.resolve('./dist', path.parse(file).dir.split('src/')[1]),
        })
    ], [])

const plugins = [
    resolve(),
    typescript(),
    less({
        insert: true,
        output: false,
        option: {
            paths: './src/styles/variables'
        }
    }),
]

const external = [
    'react',
    'react-dom',
]

export default [
    ...fromSrcToDist('components/**/index.{ts,tsx,js,jsx}', ({ inputFile, outputDir }) => (
        {
            input: inputFile,
            output: {
                dir: outputDir,
                format: 'esm',
            },
            plugins,
            external,
        }
    ))
]
