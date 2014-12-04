module.exports =
  site: ['copy:assets', 'jade', 'less']
  default: ['site', 'connect:server', 'watch']
