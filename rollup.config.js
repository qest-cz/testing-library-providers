import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: ['src/index.ts', 'src/native.ts'],
  output: {
    entryFileNames: '[name].js',
    chunkFileNames: '[name]-deps.js',
    dir: path.dirname(pkg.module),
    format: 'esm',
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
}
