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

const plugins = (src) => {
    return [
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                    declarationDir: './dist',
                },
                include: [src]
            }
        }),
        less({
            insert: true,
            output: false,
            option: {
                paths: './src/styles/variables'
            }
        }),
    ]
}

const output = {
    dir: './dist',
    format: 'umd',
    exports: 'named',
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
}

const external = [
    'react',
    'react-dom',
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
            plugins: plugins(inputFile),
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
            plugins: plugins(inputFile),
            external,
        }
    ))
]
