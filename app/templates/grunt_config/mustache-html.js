'use strict';

var project = require('../assets'),
    paths   = require('./paths'),
    config  = {};

config.options = {
  src:   paths.src.html,
  dist:  paths.dest.html,
  type: 'mustache'
};

config.dev = {
  globals: project.tmpl.dev_globals
};

config.dist = {
  globals: project.tmpl.dist_globals
};

module.exports = config;
