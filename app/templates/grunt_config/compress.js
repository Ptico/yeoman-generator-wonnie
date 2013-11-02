'use strict';

// This one configured to use with nginx: http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html

var paths  = require('./paths'),
    config = {},
    options, files;

options = {
  mode: 'gzip',
  level: 8,
  pretty: true
};

files = [
  {expand: true, cwd: paths.dest.js,  src: [paths.jsGlob],  dest: paths.dest.js,  ext: '.js.gz' },
  {expand: true, cwd: paths.dest.css, src: [paths.cssGlob], dest: paths.dest.css, ext: '.css.gz' },
  {expand: true, cwd: paths.dest.img, src: [paths.svgGlob], dest: paths.dest.img, ext: '.svg.gz' }
];

config.dist = {
  options: options,
  files: files
};

module.exports = config;
