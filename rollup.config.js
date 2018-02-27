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
  }
}