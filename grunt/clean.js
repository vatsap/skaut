'use strict';

module.exports = {

  dist: [
    '<%= paths.dist %>/css',
    '<%= paths.dist %>/fonts',
    '<%= paths.dist %>/images',
    '<%= paths.dist %>/js',
    '<%= paths.dist %>/vendor',
    '<%= paths.dist %>/*.{ico,png,xml,json,svg}',
  ],
  temp: '<%= paths.temp %>',

};
