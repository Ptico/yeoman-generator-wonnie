'use strict';

var paths  = require('./paths'),
    config = {};

// Use requirejs instead of build for development
config.js = {
  expand: true,
  cwd:   paths.src.js,
  src:   paths.jsGlob,
  dest:  paths.dest.js
};

// Do not optimize images in development
config.img = {
  expand: true,
  cwd:   paths.src.img,
  src:   paths.imgAllGlob,
  dest:  paths.dest.img
};

module.exports = config;
