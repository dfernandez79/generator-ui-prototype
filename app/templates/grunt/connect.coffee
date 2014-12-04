module.exports =
  server:
    options:
      hostname: 'localhost'
      port: '<%%=config.serverPort%>'
      base: '<%%=config.site.dir%>'
      livereload: '<%%=config.livereloadPort%>'
      open: true
