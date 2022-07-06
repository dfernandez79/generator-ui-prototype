> ⚠️ **Archived Project** ⚠️
>
> I created this project a while ago as a template for quick Web UI prototypes. At that time, Angular 1 was new and popular.
> 
> Nowadays are much better options:
> - If you need transpiling and bundling, try Vite or create-react-app.
> - If you need to do visual prototypes, try commercial tools like Figma, Sketch, or Framer. (the last one also can use React components).
> - The Angular ecosystem is very different from Angular 1.
----
# generator-ui-prototype
[![Build Status](https://travis-ci.org/dfernandez79/generator-ui-prototype.png)](https://travis-ci.org/dfernandez79/generator-ui-prototype)
[![NPM version](https://badge.fury.io/js/generator-ui-prototype.png)](http://badge.fury.io/js/generator-ui-prototype)
[![devDependency Status](https://david-dm.org/dfernandez79/generator-ui-prototype/status.png)](https://david-dm.org/dfernandez79/generator-ui-prototype#info=dependencies)

> [Yeoman] generator to create HTML prototypes using Jade,
  AngularJS, and LESS.


## Getting Started

### What is a Yeoman generator?

See http://yeoman.io/generators.html

### What does this generator?

If you work doing UI design, there is a good chance that you used some tool to
create mockups or interactive prototypes.

This generator setups some tools and files to make the creation of HTML/CSS
prototypes faster.

### Installation and usage

First get [Yeoman], [Grunt] and this generator, using one command:

```
$ npm install -g yo generator-ui-prototype
```

Then create a new project:

```
mkdir my-cool-project && cd $_
yo ui-prototype
```

Start your engines...

```
grunt
```

The last command should open your browser at `http://localhost:9001`.

The page that you see comes from `src/index.jade`, and while `grunt` is running
any `.jade` or `.less` file modified will be processed and served.

## Technical details

When you run `grunt` on the generated project:

* Every file in `src` is processed and copied to `.generated`.
* A web server is started using `.generated` as a root.
* You can edit [LESS] and [Jade] files in `src`, the contents of `.generated` will
  be updated automatically.
* The included example uses [Bower] to manage JavaScript libraries, and every
  `.js` inside `bower_components` will be copied to `.generated/scripts/libs`.
* The example is based on [Bootstrap] and Angular, and shows how you can
  prototype a web UI without any JavaScript code. It also includes some
  convenient Jade mixins for quick prototyping.

## License

MIT

[Yeoman]: http://yeoman.io
[Grunt]: http://gruntjs.com
[LESS]: http://lesscss.org/
[Jade]: http://jade-lang.com/
[Bower]: http://bower.io/
[Bootstrap]: http://getbootstrap.com/
[Angular]: https://angularjs.org/
