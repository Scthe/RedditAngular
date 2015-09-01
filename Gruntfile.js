'use strict';

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    yeoman: appConfig,
    autoprefixer: require('./grunt/config/autoprefixer'),
    clean: require('./grunt/config/clean'),
    concurrent: require('./grunt/config/concurrent'),
    connect: require('./grunt/config/connect'),
    copy: require('./grunt/config/copy'),
    filerev: require('./grunt/config/filerev'),
    jshint: require('./grunt/config/jshint'),
    karma: require('./grunt/config/karma'),
    ngAnnotate: require('./grunt/config/ngAnnotate'),
    usemin: require('./grunt/config/usemin'),
    useminPrepare: require('./grunt/config/useminPrepare'),
    watch: require('./grunt/config/watch'),
    wiredep: require('./grunt/config/wiredep')
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'uglify',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
