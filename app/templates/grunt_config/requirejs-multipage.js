'use strict';

// To more options see: https://github.com/jrburke/r.js/blob/master/build/example.build.js

// TODO: try amdclean and sourcemaps after this issue will be resolved: https://github.com/gfranko/amdclean/issues/7

var extend  = require('util')._extend,
    paths   = require('./paths'),
    path    = require('path'),
    config  = {},
    files, options;

// !! Place your files here !! //
files = ['application'];

// Basic options
options = {
  baseUrl:        paths.src.js,
  almond:         true,
  optimize:       'uglify2',
  mainConfigFile: path.join(paths.src.js, 'require_config.js'),
  useStrict:      true,
  preserveLicenseComments: false,
  generateSourceMaps:      true,
  useSourceUrl:            true
};

files.forEach(function(file) {
  var fileConfig = {
    out: path.join(paths.dest.js, file + '.js'),
    include: [file]
  };

  config[file] = { options: extend(fileConfig, options) };
});

module.exports = config;
