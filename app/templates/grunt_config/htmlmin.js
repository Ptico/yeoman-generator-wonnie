'use strict';

var paths  = require('./paths'),
    config = {};

config.dist = {
  options: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  },
  files: [{
    expand: true,
    cwd:    paths.dest.html,
    src:    paths.htmlGlob,
    dest:   paths.dest.html
  }]
};

module.exports = config;
