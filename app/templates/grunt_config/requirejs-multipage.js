'use strict';

// To more options see: https://github.com/jrburke/r.js/blob/master/build/example.build.js

var project = require('../assets'),
    extend  = require('util')._extend,
    paths   = require('./paths'),
    path    = require('path'),
    config  = {},
    options;

// Basic options
options = {
  baseUrl:        paths.src.js,
  optimize:       'uglify2',
  wrap:           true,
  skipModuleInsertion: true,
  mainConfigFile: path.join(paths.src.js, project.js.config),
  useStrict:      true,
  onBuildWrite: function (moduleName, path, contents) {
    var amd = module.require('amdclean');
    return amd.clean({
      code: contents,
      globalObject: true
    });
  }
};

project.js.modules.forEach(function(module) {
  var fileConfig = {
    out: path.join(paths.dest.js, module + '.js'),
    include: [module]
  };

  config[module] = { options: extend(fileConfig, options) };
});

module.exports = config;
