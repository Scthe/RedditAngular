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

    var all_url = "http://www.reddit.com/r/all/new.json?limit=5";

    // Public API here
    return {
      getArticlesList: function(direction, last) {
        var url = direction !== undefined && last !== undefined ? //
          all_url + '&' + direction + '=' + last + '&count=25' //
          : all_url; //
        return $http({
          url: url
        });
      },
      getArticle: function(sub, id) {
        console.log('get article: ' + sub + '/' + id);
        var url = 'http://www.reddit.com/r/' + sub + '/comments/' + id + '/.json?limit=1';
        return $http({
          url: url
        });
      }
    };
  });
