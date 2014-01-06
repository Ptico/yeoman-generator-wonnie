# generator-wonnie

Wonnie is an web-application layout generator. Build stack does next:

- Build [scss](http://sass-lang.com/) files, postprocess them with [autoprefixer](https://github.com/ai/autoprefixer) and minify with [CSSO](http://bem.info/tools/csso/)
- Build AMD javascripts with [requirejs](http://requirejs.org/) and [amdclean](https://github.com/gfranko/amdclean), minify with [UglifyJS](https://github.com/mishoo/UglifyJS2)
- Optimize images with [OptiPNG](http://optipng.sourceforge.net), [jpegtran](http://jpegclub.org/jpegtran/), and [SVGO](https://github.com/svg/svgo).
- Gzip text assets for nginx

## Getting Started

This is the sceleton generator for [Yeoman](http://yeoman.io), so you need to have it installed.

Install yeoman:

```
$ npm install -g yo
```

To install generator-wonnie from npm, run:

```
$ npm install -g generator-wonnie
```

Initiate the generator:

```
$ yo wonnie
```

Edit `$grunt_config/project.js` if needed

## Usage

For development environment run:

```
grunt watch
```

For production build:

```
grunt build
```

## File structure

By default it generates next file structure:

- assets/
- - css/
- - - app/
- - - lib/
- - - vendor/
- - img
- - js
- - - app/
- - - lib/
- - - vendor/
- config/grunt
- Gruntfile.js
- package.json

## Convensions

### Stylesheets

Only scss files will be processed.

Naming:

- `widget.scss` - stylesheet
- `_typo.scss` - partial

### Javascripts

Currently only AMD supported

By default, only `app/main.js` will be processed. You can add additional files to `$grunt_config/project.js` to the `modules` array.

File `require_config.js` is required, but you can change this in the project config too.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
