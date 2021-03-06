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
      'Gruntfile.coffee',
      'grunt/config.coffee',
      'grunt/aliases.coffee',
      'grunt/clean.coffee',
      'grunt/connect.coffee',
      'grunt/copy.coffee',
      'grunt/jade.coffee',
      'grunt/less.coffee',
      'grunt/watch.coffee',
      'src/index.jade',
      'src/_mixins.jade',
      'src/styles/main.less'
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
