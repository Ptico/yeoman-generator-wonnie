'use strict';

var project = require('../assets'),
    paths   = require('./paths'),
    config  = {};

config.options = project.server;

config.dev = {
  options: {
    base: [paths.destPath]
  }
};

module.exports = config;
