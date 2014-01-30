'use strict';

var paths = require('./paths');

module.exports = {
  options: {
    atBegin: true
  },
  scss: {
    files: [paths.src.scssAllGlob],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  css: {
    files: [paths.src.cssGlob],
    tasks: ['copy:css']
  },
  js: {
    files: [paths.src.jsGlob],
    tasks: ['copy:js']
  },
  img: {
    files: [paths.src.imgAllGlob],
    tasks: ['copy:img']
  },
  fonts: {
    files: [paths.src.fontGlob],
    tasks: ['copy:fonts']
  },
  html: {
    files: [paths.src.htmlGlob],
    tasks: ['mustache_html:dev']
  }
};
