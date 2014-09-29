module.exports =
  site: ['copy:assets', 'copy:liveReloadScript', 'jade', 'less']
  default: ['site', 'connect:server', 'watch']
