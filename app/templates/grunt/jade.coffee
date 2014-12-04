module.exports =
  compile:
    files: [
      expand: true
      cwd: '<%%=config.src.dir%>'
      src: [
        '**/*.jade'
        '!**/_*.jade'
      ]
      dest: '<%%=config.site.dir%>'
      ext: '.html'
      extDot: 'last'
    ]
