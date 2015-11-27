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

  favicon: {
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
