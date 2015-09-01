'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.RedditApiService
 * @description
 * # RedditApiService
 * Factory in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .factory('RedditApiService', function($http) {

    var all_url = "http://www.reddit.com/r/all/new.json";

    // Public API here
    return {
      getArticlesList: function() {
        return $http({
          url: all_url
        });
      }
    };
  });
