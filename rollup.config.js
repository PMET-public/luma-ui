import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import multiInput from 'rollup-plugin-multi-input'
import { version } from './package.json'
import { spawn } from 'child_process'


const plugins = [
    multiInput(),

    babel({
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ],
    }),

    tsDeclarations({ outDir: './dist', rootDir: './src' }),

    builtins(),

    nodeResolve({
        preferBuiltins: false,
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),

    commonjs({
        include: /node_modules/,
    }),
]


const output = {
    banner: `/* Luma Storybook UI Library v.${version} */`,
    compact: false,
    dir: './dist/',
    exports: 'named',
    footer: '/* by @fnhipster */',
    format: 'cjs',
}

const external = [
    'react',
    'react-dom',
    'prop-types',
    'styled-components',
]

export default [
    {
        input: [
            './src/**/*.{ts,tsx}',
            '!./src/**/*.{story,stories}.*',
            '!./src/**/*.test.*',
        ],
        output,
        plugins,
        external,
    },
]

/**
 * RollUp Plugins
 */

function tsDeclarations({ outDir, rootDir = './' }) {
    return {
        name: 'ts-declarations',

        buildStart({ input }) {
            const files = Object.keys(input).map(k => input[k]).join(' ')

            spawn(`yarn tsc \
                --allowSyntheticDefaultImports \
                --declaration \
                --emitDeclarationOnly \
                --esModuleInterop \
                --jsx react \
                --moduleResolution node \
                --module esnext \
                --outDir ${outDir} \
                --rootDir ${rootDir} \
                --target esnext \
                ${files}`, {
                    shell: true,
                    stdio: 'ignore',
                    env: process.env
                }).on('close', () => {
                    console.log(`*.d.ts → ${outDir}.`)
                })
        }
    }
}
