'use strict';

// To more options see: https://github.com/jrburke/r.js/blob/master/build/example.build.js

var extend  = require('util')._extend,
    paths   = require('./paths'),
    path    = require('path'),
    config  = {},
    modules, options;

// !! Place your files here !! //
//    ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼    //
modules = ['application'];

// Basic options
options = {
  baseUrl:        paths.src.js,
  almond:         true,
  optimize:       'uglify2',
  mainConfigFile: path.join(paths.src.js, 'require_config.js'), // <- Remove or change requirejs config here
  useStrict:      true,
  preserveLicenseComments: false,
  generateSourceMaps:      true,
  useSourceUrl:            true
};

modules.forEach(function(module) {
  var fileConfig = {
    out: path.join(paths.dest.js, module + '.js'),
    include: [module]
  };

  config[module] = { options: extend(fileConfig, options) };
});

module.exports = config;

// TODO: try amdclean and sourcemaps after this issue will be resolved: https://github.com/gfranko/amdclean/issues/7