'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.RedditApiService
 * @description
 * # RedditApiService
 * Factory in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .factory('RedditApiService', function($http, Config) {
    var baseUrl = Config.API.protocol + '://' + Config.API.host + '/' + Config.API.path + '/';

    return {
      getArticlesList: function(direction, last) {
        var url = baseUrl + 'all/new.json?limit=' + Config.itemsPerPage;
        if (direction !== undefined && last !== undefined) {
          url += '&' + direction + '=' + last + '&count=25';
        }
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
      },
      addComment: function(parent, text) {
        console.log('Add comment to ' + parent + ': "' + text + '"');
      }
    };
  });
