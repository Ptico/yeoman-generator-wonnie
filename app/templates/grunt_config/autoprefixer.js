'use strict';

var project = require('../assets'),
    paths   = require('./paths'),
    config  = {};

config.options = {
  browsers: project.css.browsers
};

config.dev = {
  expand:  true,
  cwd:     paths.dest.css,
  src:     paths.cssGlob,
  dest:    paths.dest.css
};

config.dist = {
  expand:  true,
  cwd:     paths.dest.css,
  src:     paths.cssGlob,
  dest:    paths.dest.css
};

module.exports = config;
