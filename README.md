# generator-wonnie

Wonnie is a build stack to replace Rails assets pipeline. What it does?

- Build [scss](http://sass-lang.com/) files, postprocess them with [autoprefixer](https://github.com/ai/autoprefixer) and minify with [CSSO](http://bem.info/tools/csso/)
- Build AMD javascripts, minify with [UglifyJS](https://github.com/mishoo/UglifyJS2) and make source maps
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

Finally, initiate the generator:

```
$ yo wonnie
```

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
- .grunt_config/
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

By default, only `app/main.js` will be processed. You can add additional files to `.grunt_config/requirejs-multipage.js` to the `modules` array.

File `require_config.js` is required, but you can change this in config.

## TODO

- [ ] Generate testing structure
- [ ] JSHint task
- [ ] Process plain css files
- [ ] Do not gzip asset if gzipped size > non gzipped size
- [ ] Possibly use grunt-newer for development
- [ ] Tests

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
