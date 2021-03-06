'use strict';

var path       = require('path'),
    configPath = path.resolve('<%= configFolder %>');

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
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mustache-html');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  var gruntConfig = {};

  // Watch for changes
  gruntConfig.watch = require(path.join(configPath, 'watch'));

  // Webserver
  gruntConfig.connect = require(path.join(configPath, 'connect'));

  // HTML-rendering
  gruntConfig.mustache_html = require(path.join(configPath, 'mustache-html'));

  // HTML-minifier
  gruntConfig.htmlmin = require(path.join(configPath, 'htmlmin'));

  // Compile stylesheets
  gruntConfig.sass = require(path.join(configPath, 'sass')); // require('configs/sass-contrib');

  // Add vendor prefixes to css rules by Can I Use
  gruntConfig.autoprefixer = require(path.join(configPath, 'autoprefixer'));

  // Optimize CSS with CSSO optimizer
  gruntConfig.csso = require(path.join(configPath, 'csso'));

  // Copy files wich doesn't need compilation
  gruntConfig.copy = require(path.join(configPath, 'copy'));

  // Build javascripts with requirejs
  gruntConfig.requirejs = require(path.join(configPath, 'requirejs-multipage'));

  // Optimize images
  gruntConfig.imagemin = require(path.join(configPath, 'imagemin'));

  // Optimize svg
  gruntConfig.svgmin = require(path.join(configPath, 'svgmin'));

  // Compress text assets to gzip
  gruntConfig.compress = require(path.join(configPath, 'compress'));

  // Concurrent task running
  gruntConfig.concurrent = require(path.join(configPath, 'concurrent'));

  // Clean generated files
  gruntConfig.clean = require(path.join(configPath, 'clean'));

  /* Project configuration. */
  grunt.initConfig(gruntConfig);

  grunt.registerTask('css:dist',  ['sass:dist', 'autoprefixer:dist', 'copy:css', 'csso:dist']);
  grunt.registerTask('js:dist',   ['requirejs']);
  grunt.registerTask('img:dist',  ['imagemin:dist', 'svgmin:dist']);
  grunt.registerTask('html:dist', ['mustache_html:dist', 'htmlmin:dist']);

  grunt.registerTask('build', ['clean:all', 'concurrent:dist', 'compress:dist']);
  grunt.registerTask('serve', ['clean:all', 'connect:dev', 'watch']);
};
