/*global describe, beforeEach, it */
'use strict';

var
  path = require('path'),
  helpers = require('yeoman-generator').test;


describe('ui-prototype generator', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('ui-prototype:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.jshintrc',
      '.editorconfig',
      '.gitignore',
      '.bowerrc',
      'bower.json',
      'package.json',
      'Gruntfile.js',
      'src/index.jade',
      'src/_layout.jade',
      'src/_mixins.jade',
      'src/_debug-grid.jade',
      'src/styles/main.less',
      'src/styles/debug-grid.less',
      'src/scripts/livereload-support.js'
    ];

    helpers.mockPrompt(this.app, {
      name: 'test-project',
      description: 'Test project for unit testing'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

});
