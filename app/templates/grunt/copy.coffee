module.exports = (grunt) ->
  assets:
    files: [
      {
        expand: true
        dest: '<%%=config.site.dir%>'
        src: [
          '**/*.*'
          '!**/*.less'
          '!**/*.jade'
        ]
        cwd: '<%%=config.src.dir%>'
      }, {
        expand: true
        dest: '<%%=config.site.vendor%>'
        src: ['**/*.js']
        cwd: 'bower_components'
      }<%if (props.fontAwesome) {%>, {
        expand: true
        dest: '<%%=config.site.fonts%>'
        src: ['**/*.*']
        cwd: 'node_modules/font-awesome/fonts'
      }<%}%>
    ]
