var project = {};

/*
 * Javascript config
 */
project.js = {
  // Modules to build as separate files
  modules: ['app/main'],

  // Main requirejs config file
  // path must be relative to js/ folder
  config: 'require_config.js'
};

/*
 * CSS config
 */
project.css = {
  // Setup additinal include paths
  // By default it uses css/ folder as root
  additionalPaths: [],

  // Supported browsers
  // https://github.com/ai/autoprefixer#browsers
  browsers: ['<%= browserSupport %>'],

  // Output style for development mode
  // Can be 'nested', 'expanded', 'compact' or 'compressed'
  outputStyle: 'expanded'
};

module.exports = project;
