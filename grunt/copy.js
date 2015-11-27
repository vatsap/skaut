'use strict';

module.exports = {

  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
    ],
  },

  assets: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/favicon/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/favicon/',
      },
    ],
  },

};
