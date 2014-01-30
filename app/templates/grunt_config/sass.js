'use strict';

var project = require('../assets'),
    paths   = require('./paths'),
    config  = {},
    sassPaths;

sassPaths = project.css.additionalPaths;

sassPaths.unshift(paths.src.css);

config.dev = {
  options: {
    outputStyle:  project.css.outputStyle,
    includePaths: sassPaths
  },
  files: [{
    expand: true,
    cwd:    paths.src.css,
    src:    paths.scssGlob,
    dest:   paths.dest.css,
    ext:    '.css'
  }]
};

config.dist = {
  options: {
    includePaths: sassPaths
  },
  files: [{
    expand: true,
    cwd:    paths.src.css,
    src:    paths.scssGlob,
    dest:   paths.dest.css,
    ext:    '.css'
  }]
};

module.exports = config;
