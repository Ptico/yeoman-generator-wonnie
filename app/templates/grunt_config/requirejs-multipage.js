'use strict';

// To more options see: https://github.com/jrburke/r.js/blob/master/build/example.build.js

var extend  = require('util')._extend,
    paths   = require('./paths'),
    path    = require('path'),
    config  = {},
    modules, options;

// !! Place your files here !! //
//    ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼    //
modules = ['app/main'];

// Basic options
options = {
  baseUrl:        paths.src.js,
  optimize:       'uglify2',
  wrap:           true,
  skipModuleInsertion: true,
  mainConfigFile: path.join(paths.src.js, 'require_config.js'), // <- Remove or change requirejs config here
  useStrict:      true,
  onBuildWrite: function (moduleName, path, contents) {
    var amd = module.require('amdclean');
    return amd.clean({
      code: contents,
      globalObject: true
    });
  }
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
