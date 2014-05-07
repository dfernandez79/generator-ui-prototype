'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      siteDir: '.generated',
      srcDir: 'src',
      livereloadPort: <%=props.livereloadPort%>,
      serverPort: <%=props.serverPort%>
    },

    copy: {
      assets: {
        files: [{
          expand: true,
          dest: '<%%= config.siteDir %>',
          src: [
            '**/*.*',
            '!scripts/livereload-support.js',
            '!styles/**/*.less', '!**/*.jade'],
          cwd: '<%%= config.srcDir %>'
        }, {
          expand: true,
          dest: '<%%= config.siteDir %>/scripts/libs',
          src: ['**/*.js'],
          cwd: 'bower_components'
        }]
      },

      liveReloadScript: {
        dest: '<%= config.siteDir %>/scripts/livereload-support.js',
        src: 'scripts/livereload-support.js',
        options: {
          process: function (content) {
            return grunt.template.process(content);
          }
        }
      }
    },

    clean: {
      generated: '<%%= config.siteDir %>'
    },

    less: {
      compile: {
        files: {
          '<%%= config.siteDir %>/styles/main.css': '<%%= config.srcDir %>/styles/main.less'
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
          cwd: '<%%= config.srcDir %>',
          src: ['**/*.jade', '!**/_*.jade'],
          dest: '<%%= config.siteDir %>',
          ext: '.html'
        }]
      }
    },

    watch: {
      options: {
        livereload: '<%%= config.livereloadPort %>'
      },
      styles: {
        files: ['src/styles/**/*.less'],
        tasks: ['less']
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: ['jade']
      },
      assets: {
        files: ['src/**/*.*', '!src/styles/**/*.less', '!src/**/*.jade'],
        tasks: ['copy']
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: '<%%= config.serverPort %>',
          base: '<%%= config.siteDir %>',
          open: true
        }
      }
    }
  });

  grunt.registerTask('site', ['copy', 'jade', 'less']);
  grunt.registerTask('default', ['site', 'connect:server', 'watch']);

};
