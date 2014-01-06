# generator-wonnie

Tired with your Rails asset pipeline? Have no idea how to manage assets in Sinatra or %your_favorite_framework%? Try Wonnie!

Wonnie is an web-application layout generator. Build stack does next:

- Build [scss](http://sass-lang.com/) files, postprocess them with [autoprefixer](https://github.com/ai/autoprefixer) and minify with [CSSO](http://bem.info/tools/csso/)
- Build AMD javascripts with [requirejs](http://requirejs.org/) and [amdclean](https://github.com/gfranko/amdclean), minify with [UglifyJS](https://github.com/mishoo/UglifyJS2)
- Optimize images with [OptiPNG](http://optipng.sourceforge.net), [jpegtran](http://jpegclub.org/jpegtran/), and [SVGO](https://github.com/svg/svgo).
- Gzip text assets for nginx

## Why Wonnie?

- Easy to configure
- Smaller assets footprint than every framework can build
- Boilerplate and tools for code organization - no more spagetti hell

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

### For development environment run:

```
grunt watch
```

Make sure that you pick proper public folder for your framework.

If you use foreman/shoreman/honcho/norman you may want to add this to Procfile:

```
web: ...
assets: grunt watch
```

Users of tmuxinator can add `grunt watch` to the separate tab

### For production build:

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

Only scss files will be processed for now.

Naming:

- `widget.scss` - stylesheet
- `_typo.scss` - partial

### Javascripts

Currently only AMD supported

By default, only `app/main.js` will be processed. You can add additional files to `$grunt_config/project.js` inside the `modules` array.

File `require_config.js` contains global requirejs options.

Production files will be built with [amdclean](https://github.com/gfranko/amdclean) so all it's limitations should be applied to the development code too.

In development mode you need to add requirejs and require_config manually. For example in Rails it looks like:

```erb
<% if Rails.env.development? %>
  <script type="text/javascript" src="/js/vendor/requirejs.js"></script>
  <script type="text/javascript" src="/js/require_config.js"></script>
<% end %>

<script type="text/javascript" src="/js/main.js"></script>
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
