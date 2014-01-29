'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var WonnieGenerator = module.exports = function WonnieGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WonnieGenerator, yeoman.generators.Base);

WonnieGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'Name your application',
      default: path.basename(process.cwd())
    },
    {
      type: 'list',
      name: 'browserSupport',
      message: 'Choose browser support strategy:',
      default: 1,
      choices: [
        'last 1 version',
        'last 2 versions',
        'last 3 versions',
        '> 1%', '> 5%', '> 10%',
        'chrome', 'ios', 'ff',
        'none'
      ]
    },
    {
      type: 'input',
      name: 'basePath',
      message: 'Choose sources destination:',
      default: 'assets'
    },
    {
      type: 'input',
      name: 'configPath',
      message: 'Choose configs destination',
      default: 'config/grunt'
    },
    {
      type: 'input',
      name: 'buildPath',
      message: 'Choose build destination:',
      default: 'public'
    }
  ];

  this.prompt(prompts, function(props) {
    this.browserSupport = props.browserSupport;

    this.appName    = props.appName;
    this.basePath   = props.basePath;
    this.configPath = props.configPath;
    this.buildPath  = props.buildPath;

    cb();
  }.bind(this));
};

WonnieGenerator.prototype.app = function app() {
  this.mkdir(this.basePath);
  this.mkdir(path.join(this.basePath, 'css'));
  this.mkdir(path.join(this.basePath, 'js'));
  this.mkdir(path.join(this.basePath, 'img'));
  this.mkdir(path.join(this.basePath, 'font'));

  this.mkdir(path.join(this.basePath, 'js',  'app'));
  this.mkdir(path.join(this.basePath, 'js',  'lib'));
  this.mkdir(path.join(this.basePath, 'js',  'vendor'));

  this.mkdir(path.join(this.basePath, 'css', 'app'));
  this.mkdir(path.join(this.basePath, 'css', 'lib'));
  this.mkdir(path.join(this.basePath, 'css', 'vendor'));

  this.copy('js/require_config.js', path.join(this.basePath, 'js', 'require_config.js'));
  this.copy('js/main.js', path.join(this.basePath, 'js', 'app', 'main.js'));
};

WonnieGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');

  this.template('grunt_config/project.js', path.join(this.configPath, 'project.js'));
  this.template('grunt_config/paths.js', path.join(this.configPath, 'paths.js'));
  this.template('grunt_config/autoprefixer.js', path.join(this.configPath, 'autoprefixer.js'));
  this.copy('grunt_config/clean.js', path.join(this.configPath, 'clean.js'));
  this.copy('grunt_config/compress.js', path.join(this.configPath, 'compress.js'));
  this.copy('grunt_config/concurrent.js', path.join(this.configPath, 'concurrent.js'));
  this.copy('grunt_config/copy.js', path.join(this.configPath, 'copy.js'));
  this.copy('grunt_config/csso.js', path.join(this.configPath, 'csso.js'));
  this.copy('grunt_config/imagemin.js', path.join(this.configPath, 'imagemin.js'));
  this.copy('grunt_config/requirejs-multipage.js', path.join(this.configPath, 'requirejs-multipage.js'));
  this.copy('grunt_config/sass-contrib.js', path.join(this.configPath, 'sass-contrib.js'));
  this.copy('grunt_config/sass.js', path.join(this.configPath, 'sass.js'));
  this.copy('grunt_config/svgmin.js', path.join(this.configPath, 'svgmin.js'));
  this.copy('grunt_config/watch.js', path.join(this.configPath, 'watch.js'));
};

WonnieGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_package.json', 'package.json');
};
