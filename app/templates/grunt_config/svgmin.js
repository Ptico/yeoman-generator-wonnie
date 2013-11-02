'use strict';

var paths  = require('./paths'),
    config = {};

config.dist = {
  files: [{
    expand: true,
    cwd:    paths.src.img,
    src:    paths.svgGlob,
    dest:   paths.dest.img
  }]
};

module.exports = config;
