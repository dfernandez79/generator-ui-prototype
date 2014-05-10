module.exports =
  compile:
    files: [
      expand: true
      cwd: '<%%=config.srcDir%>'
      src: ['**/*.jade', '!**/_*.jade']
      dest: '<%%=config.siteDir%>'
      ext: '.html'
    ]