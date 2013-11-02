'use strict';

var paths  = require('./paths'),
    config = {},
    sassPaths;

sassPaths = [];

config.dev = {
  options: {
    style:      'expanded',
    lineNumbers: true,
    bundleExec:  true,
    trace:       true,
    loadPath:    sassPaths
  },
  files: [{
    expand: true,
    cwd:    paths.src.css,
    src:    paths.scssGlob,
    dest:   paths.tmp.css,
    ext:    '.css'
  }]
};

config.dist = {
  options: {
    bundleExec: true,
    loadPath:   sassPaths
  },
  files: [{
    expand: true,
    cwd:    paths.src.css,
    src:    paths.scssGlob,
    dest:   paths.tmp.css,
    ext:    '.css'
  }]
};

module.exports = config;
