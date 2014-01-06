'use strict';

var paths  = require('./paths'),
    config = {},
    sassPaths;

sassPaths = [];

sassPaths.push(paths.src.css);

config.dev = {
  options: {
    outputStyle: 'expanded',
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
