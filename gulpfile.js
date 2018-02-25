/*
注意：import的文件如果后面不使用，rollup就不会将import的文件进行打包
*/
var gulp = require('gulp');
var rollup = require('rollup');

const definition = require("./package.json");
const dependencies = Object.keys(definition.dependencies);

gulp.task('build', () => {
  return rollup.rollup({
    input: 'index.js',
    external: ['jquery']
  }).then(bundle => {
    return bundle.write({
      name: "gpte",
      file: 'dist/gpte.js',
      format: 'umd',
      globals: {
        jquery: '$'
      }
    })
  });
});

gulp.task('default', ['build']);

