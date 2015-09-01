'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.RedditApiService
 * @description
 * # RedditApiService
 * Factory in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .factory('RedditApiService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
