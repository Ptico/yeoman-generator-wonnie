'use strict';

var paths  = require('./paths'),
    config = {};

config.options = {
  browsers: ['<%= browserSupport %>']
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
