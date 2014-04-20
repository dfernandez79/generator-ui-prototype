'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      siteDir: '.generated',
      srcDir: 'src',
      livereloadPort: 35730,
      serverPort: 9001
    },

    copy: {
      assets: {
        files: [{
          expand: true,
          dest: '<%%= meta.siteDir %>',
          src: ['**/*.*', '!styles/**/*.less', '!**/*.jade'],
          cwd: '<%%= meta.srcDir %>'
        }, {
          expand: true,
          dest: '<%%= meta.siteDir %>/scripts/libs',
          src: ['**/*.js'],
          cwd: 'bower_components'
        }]
      }
    },

    clean: {
      generated: '<%%= meta.siteDir %>'
    },

    less: {
      compile: {
        files: {
          '<%%= meta.siteDir %>/styles/main.css': '<%%= meta.srcDir %>/styles/main.less'
        },
        options: {
          sourceMap: true
        }
      }
    },

    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: '<%%= meta.srcDir %>',
          src: ['**/*.jade', '!**/_*.jade'],
          dest: '<%%= meta.siteDir %>',
          ext: '.html'
        }]
      }
    },

    watch: {
      options: {
        livereload: '<%%= meta.livereloadPort %>'
      },
      styles: { files: ['src/styles/**/*.less'], tasks: ['less'] },
      jade: { files: 'src/**/*.jade', tasks: ['jade'] },
      assets: { files: ['src/**/*.*', '!src/styles/**/*.less', '!src/**/*.jade'], tasks: ['copy']}
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: '<%%= meta.serverPort %>',
          base: '<%%= meta.siteDir %>',
          open: true
        }
      }
    }
  });

  grunt.registerTask('site', ['copy', 'jade', 'less']);
  grunt.registerTask('default', ['site', 'connect:server', 'watch']);

};
