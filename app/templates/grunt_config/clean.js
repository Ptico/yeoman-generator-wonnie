'use strict';

var paths = require('./paths');

module.exports = {
  all: ['tmp/assets', paths.dest.js, paths.dest.css, paths.dest.img],
  tmp: ['tmp/assets']
};
