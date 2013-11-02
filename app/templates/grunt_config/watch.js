'use strict';

var paths = require('./paths');

module.exports = {
  options: {
    atBegin: true
  },
  styles: {
    files: [paths.src.scssAllGlob],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  js: {
    files: [paths.src.jsGlob],
    tasks: ['copy:js']
  },
  img: {
    files: [paths.src.imgAllGlob],
    tasks: ['copy:img']
  }
};
