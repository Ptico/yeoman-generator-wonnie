'use strict';

var project = require('./project'),
    paths   = require('./paths'),
    config  = {},
    sassPaths;

sassPaths = project.css.additionalPaths;

sassPaths.unshift(paths.src.css);

config.dev = {
  options: {
    style:       project.css.outputStyle,
    lineNumbers: true,
    bundleExec:  true,
    trace:       true,
    loadPath:    sassPaths
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
    bundleExec: true,
    loadPath:   sassPaths
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
