# generator-wonnie

Wonnie is a build stack to replace Rails assets pipeline. What it does?

- Build [scss](http://sass-lang.com/) files, postprocess them with [autoprefixer](https://github.com/ai/autoprefixer) and minify with [CSSO](http://bem.info/tools/csso/)
- Build AMD javascripts, minify with [UglifyJS](https://github.com/mishoo/UglifyJS2) and make source maps
- Optimize images with [OptiPNG](http://optipng.sourceforge.net), [jpegtran](http://jpegclub.org/jpegtran/),  [gifsicle](http://www.lcdf.org/gifsicle) and [SVGO](https://github.com/svg/svgo).
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
- - css
- - img
- - js
- .grunt_config/
- Gruntfile.js
- package.json

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
