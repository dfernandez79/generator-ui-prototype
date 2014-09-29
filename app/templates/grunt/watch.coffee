module.exports =
  options:
    livereload: '<%%=config.livereloadPort%>'
  styles:
    files: ['src/styles/**/*.less']
    tasks: ['less']
  jade:
    files: 'src/**/*.jade'
    tasks: ['jade']
  assets:
    files: ['src/**/*.*', '!src/styles/**/*.less', '!src/**/*.jade']
    tasks: ['copy']
  grunt:
    files: ['Gruntfile.coffee', 'grunt/*.*']
    options:
      reload: true
