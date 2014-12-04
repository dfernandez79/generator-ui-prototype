'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');


module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
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
    }, {
      name: 'fontAwesome',
      message: 'Add Font Awesome?',
      type: 'confirm',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.slugname = this._.slugify(props.name);
      this.props = props;
      cb();
    }.bind(this));
  },

  writing: {
    packages: function () {
      this.copy('package.json');
      this.copy('bower.json');
    },

    dotFiles: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
      this.copy('gitignore', '.gitignore');
      this.copy('bowerrc', '.bowerrc');
    },

    directories: function () {
      this.mkdir('src');
      this.mkdir('src/styles');
      this.mkdir('src/scripts');
      this.mkdir('src/images');
      this.mkdir('grunt');
    },

    gruntfile: function () {
      this.copy('Gruntfile.coffee');
      this.directory('grunt');
    },

    example: function () {
      this.directory('src');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }

});
