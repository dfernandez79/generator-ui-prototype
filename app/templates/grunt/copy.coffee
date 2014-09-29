module.exports = (grunt) ->
  assets:
    files: [
      {
        expand: true
        dest: '<%%=config.siteDir%>'
        src: [
          '**/*.*'
          '!scripts/livereload-support.js'
          '!styles/**/*.less', '!**/*.jade'
        ]
        cwd: '<%%=config.srcDir%>'
      }, {
        expand: true
        dest: '<%%=config.siteDir%>/scripts/libs'
        src: ['**/*.js']
        cwd: 'bower_components'
      }<%if (props.fontAwesome) {%>, {
        expand: true
        dest: '<%%=config.siteDir%>/fonts'
        src: ['**/*.*']
        cwd: 'node_modules/font-awesome/fonts'
      }<%}%>
    ]

  liveReloadScript:
    dest: '<%%=config.siteDir%>/scripts/livereload-support.js'
    src: 'src/scripts/livereload-support.js'
    options:
      process: (content) -> grunt.template.process(content)
