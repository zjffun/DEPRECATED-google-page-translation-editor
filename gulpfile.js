/*
注意：import的文件如果后面不使用，rollup就不会将import的文件进行打包
*/
var gulp = require('gulp');
var exec = require('child_process').exec;

const definition = require("./package.json");
const dependencies = Object.keys(definition.dependencies);

gulp.task('build', () => {
  exec('rollup -c', function(err, stdout, stderr) {
    console.log(stderr);
  });
});

gulp.task('watch',function(){
  gulp.watch(['./src/*.js', './src/*/*.js', 'index.js'], ['build']);
})

gulp.task('default', ['build', 'watch']);

