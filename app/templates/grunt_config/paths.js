'use strict';

var path  = require('path'),
    paths = {};

paths.srcPath  = '<%= basePath %>';
paths.destPath = '<%= buildPath %>';

paths.src = {
  js:  path.join(paths.srcPath, 'js'),
  css: path.join(paths.srcPath, 'css'),
  img: path.join(paths.srcPath, 'img')
};

paths.dest = {
  js:  path.join(paths.destPath, 'js'),
  css: path.join(paths.destPath, 'css'),
  img: path.join(paths.destPath, 'img')
};

paths.tmp = {
  js:  'tmp/assets/js',
  css: 'tmp/assets/css',
  img: 'tmp/assets/img'
};

paths.jsGlob     = '**/*.js';
paths.cssGlob    = '**/*.css';
paths.scssGlob   = ['**/*.scss', '!**/_*.scss'];
paths.imgGlob    = '**/*.{gif,jpeg,jpg,png}';
paths.svgGlob    = '**/*.svg';
paths.imgAllGlob = '**/*.{gif,jpeg,jpg,png,svg}';

paths.src.jsGlob      = path.join(paths.src.js,  paths.jsGlob);
paths.src.cssGlob     = path.join(paths.src.css, paths.cssGlob);
paths.src.scssAllGlob = path.join(paths.src.css, '**/*.scss');
paths.src.imgAllGlob  = path.join(paths.src.img, paths.imgAllGlob);

paths.dest.jsGlob  = path.join(paths.dest.js,  paths.jsGlob);
paths.dest.cssGlob = path.join(paths.dest.css, paths.cssGlob);
paths.dest.imgGlob = path.join(paths.dest.img, paths.imgGlob);
paths.dest.svgGlob = path.join(paths.dest.img, paths.svgGlob);
paths.dest.imgAllGlob = path.join(paths.dest.img, paths.imgAllGlob);

paths.tmp.cssGlob = path.join(paths.tmp.css, paths.cssGlob);

module.exports = paths;
