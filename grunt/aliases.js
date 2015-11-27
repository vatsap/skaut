'use strict';

module.exports = {

  'test-less': [
    'lesslint',
  ],

  'test-js': [
    'jshint',
    'jscs',
  ],

  test: [
    'test-less',
    'test-js',
  ],

  'build-css': [
    'less',
    'postcss',
  ],

  'build-js': [
    'browserify',
    'concat',
    'uglify',
  ],

  'build-images': [
    'svgmin',
    'imagemin',
  ],

  build: [
    'clean',
    'build-css',
    'build-js',
    'build-images',
    'copy:assets',
    'copy:fonts',
  ],

  dev: [
    'test',
    'build',
    'watch',
  ],

  default: [
    'test',
    'build',
  ],

};
