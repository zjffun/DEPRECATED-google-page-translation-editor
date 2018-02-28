import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  external: ['jquery'],
  output: {
    name: "gpte",
    file: 'dist/gpte.js',
    format: 'umd',
    globals: {
      jquery: '$'
    }
  },
  plugins: [ resolve() ]
}