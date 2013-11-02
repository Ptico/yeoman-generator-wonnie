'use strict';

var paths = require('./paths');

module.exports = {
  dist: {
    options: {
      report: 'gzip'
    },
    files: [{
      expand:  true,
      cwd:     paths.tmp.css,
      src:     paths.cssGlob,
      dest:    paths.dest.css,
      ext:     '.css' // Don't do min.css
    }]
  }
};
