(function () {
  /* global document, window */
  'use strict';

  var
    hostname = (window.location.host || 'localhost').split(':')[0],
    livereloadPort = 35730;

  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
    document.write('<script src="http://' + hostname + ':' + livereloadPort + '/livereload.js"></' + 'script>');
  }

})();
