'use strict';

var sassPaths = [];

module.exports = function(grunt) {
  /* Dependencies */
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass'); // Change to grunt-contrib-sass if necessary
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var gruntConfig = {};

  // Watch for changes
  gruntConfig.watch = require('./.grunt_config/watch');

  // Compile stylesheets
  gruntConfig.sass = require('./.grunt_config/sass'); // require('configs/sass-contrib');

  // Add vendor prefixes to css rules by Can I Use
  gruntConfig.autoprefixer = require('./.grunt_config/autoprefixer');

  // Optimize CSS with CSSO optimizer
  gruntConfig.csso = require('./.grunt_config/csso');

  // Copy files wich doesn't need compilation
  gruntConfig.copy = require('./.grunt_config/copy');

  // Build javascripts with requirejs
  gruntConfig.requirejs = require('./.grunt_config/requirejs-multipage');

  // Optimize images
  gruntConfig.imagemin = require('./.grunt_config/imagemin');

  // Optimize svg
  gruntConfig.svgmin = require('./.grunt_config/svgmin');

  // Compress text assets to gzip
  gruntConfig.compress = require('./.grunt_config/compress');

  // Concurrent task running
  gruntConfig.concurrent = require('./.grunt_config/concurrent');

  // Clean generated files
  gruntConfig.clean = require('./.grunt_config/clean');

  /* Project configuration. */
  grunt.initConfig(gruntConfig);

  grunt.registerTask('css:dist', ['sass:dist', 'autoprefixer:dist', 'csso:dist']);
  grunt.registerTask('js:dist',  ['requirejs']);
  grunt.registerTask('img:dist', ['imagemin:dist', 'svgmin:dist']);

  grunt.registerTask('build', ['clean:all', 'concurrent:dist', 'compress:dist']);
};
