var gulp = require('gulp');
var rollup = require('rollup');

const definition = require("./package.json");
const dependencies = Object.keys(definition.dependencies);


gulp.task('build', () => {
  return rollup.rollup({
    input: './index.js',
    external: dependencies
  }).then(bundle => {
    return bundle.write({
      name: "gpte",
      file: './dist/gpte.js',
      format: 'umd',
      globals: dependencies.reduce((p, v) => (p[v] = v, p), {})
    })
  });
});

gulp.task('default', ['build']);

