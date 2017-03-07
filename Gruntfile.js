'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    paths: {
      src: 'app/Resources',
      dist: 'web',
      bower: 'bower_components',
      templates: 'app/Resources/views',
      temp: '.tmp',
    },

    // Development
    devUrl: 'localhost:8000',
    devBrowser: 'google chrome',

  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
