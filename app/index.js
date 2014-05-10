'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({

  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var cb = this.async();

    var prompts = [{
      name: 'name',
      message: 'Project name',
      default: path.basename(process.cwd())
    }, {
      name: 'description',
      message: 'Description',
      default: 'The best UI prototype ever.'
    }, {
      name: 'serverPort',
      message: 'Local server port (use the default if you don\'t know what this means)',
      default: 9001
    }, {
      name: 'livereloadPort',
      message: 'Live reload port (use the default if you don\'t know what this means)',
      default: 35730
    }];

    this.prompt(prompts, function (props) {
      this.slugname = this._.slugify(props.name);
      this.props = props;
      cb();
    }.bind(this));
  },

  createPackageDescriptions: function () {
    this.copy('package.json');
    this.copy('bower.json');
  },

  createDotFiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');
  },

  createDirectories: function () {
    this.mkdir('src');
    this.mkdir('src/styles');
    this.mkdir('src/scripts');
    this.mkdir('src/images');
    this.mkdir('grunt');
  },

  createGruntfile: function () {
    this.copy('Gruntfile.coffee');
    this.directory('grunt');
  },

  createExample: function () {
    this.directory('src');
  }

});
