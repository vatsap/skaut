'use strict';

module.exports = {

  dist: {
    options: {
      banner: '<%= banner %>',
      sourceMap: true,
    },
    src: [
      '<%= paths.bower %>/jquery/dist/jquery.js',
      '<%= paths.bower %>/picturefill/dist/picturefill.js',
      '<%= paths.temp %>/js/main.js',
    ],
    dest: '<%= paths.temp %>/js/main.js',
  },

};
