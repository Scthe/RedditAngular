// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-09-01 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower

      // "app/scripts/**/*.js",
      // "test/mock/**/*.js",
      // "test/spec/**/*.js",
      // "test/spec/controllers/*.js"

      // for some reason patterns fail (on windows at least)
      // TODO investigate further
      "app/scripts/app.js",
      "app/scripts/app-mockbackend.js",
      "app/scripts/controllers/article-list.js",
      "app/scripts/controllers/article.js",
      "app/scripts/services/reddit-api-service.js",
      "app/scripts/services/articles-repository-service.js",
      "app/scripts/directives/article-list-item.js",
      "app/scripts/filters/as-date.js",
      "app/scripts/directives/article-date.js",
      "app/scripts/directives/article-author.js",
      "app/scripts/directives/article-subreddit.js",
      "app/scripts/directives/add-comment-form.js",

      // "test/spec/controllers/*.js",
      // "test/spec/directives/*.js",
      "test/spec/filters/*.js",
      // "test/spec/services/*.js",
    ],

    // list of files / patterns to exclude
    exclude: [],

    // test results reporter to use
    // 'mocha' reporter prints names of tests that run. Why is it not a default?
    // reporters: ['mocha'],
    reporters: ['progress'],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "Chrome"
    ],

    // Which plugins to enable
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
