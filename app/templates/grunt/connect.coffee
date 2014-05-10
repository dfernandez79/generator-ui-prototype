module.exports =
  server:
    options:
      hostname: 'localhost'
      port: '<%%=config.serverPort%>'
      base: '<%%=config.siteDir%>'
      open: true
