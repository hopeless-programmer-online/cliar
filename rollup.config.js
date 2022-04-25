import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
// import shebang from 'rollup-plugin-preserve-shebang'

export default [
    {
        input: 'src/cliar.ts',
        output: {
            file: 'dist/cliar.js',
            format: 'cjs',
        },
        plugins: [ typescript() ],
    },
    // {
    //     input: '.ts/cli.js',
    //     output: {
    //         file: 'dist/cli.js',
    //         format: 'cjs',
    //     },
    //     plugins: [ shebang() ],
    //     external: [ 'path', 'fs' ],
    // },
    {
        input: '.ts/cliar.d.ts',
        output: {
            file: 'dist/cliar.d.ts',
            format: 'es',
        },
        plugins: [ dts() ],
    },
]
