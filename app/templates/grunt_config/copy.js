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

config.fonts = {
  expand: true,
  cwd:    paths.src.font,
  src:    paths.fontGlob,
  dest:   paths.dest.font
};

config.css = {
  expand: true,
  cwd:    paths.src.css,
  src:    paths.cssGlob,
  dest:   paths.dest.css
};

module.exports = config;
