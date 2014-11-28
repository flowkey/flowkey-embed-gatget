module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'bower_components/eventEmitter/EventEmitter.js',
      'bower_components/versal-player-api/index.js',
      'bower_components/jquery/dist/jquery.min.js',
      'gadget.js',
      'gadget_spec.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox']
  });
};
