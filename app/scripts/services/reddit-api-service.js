'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.RedditApiService
 * @description
 * # RedditApiService
 * Expose reddit API to other classes in the app. Currently supports:
 * * getting list of articles
 * * getting single article
 * * posting new comment
 */
angular.module('redditAngularApp')
  .factory('RedditApiService', function($http, Config) {
    var baseUrl = Config.API.protocol + '://' + Config.API.host + '/' + Config.API.path + '/',
      addCommentUrl = Config.API.protocol + '://' + Config.API.host + '/api/comment';

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
        var url = baseUrl + sub + '/comments/' + id + '/.json?limit=1';
        return $http({
          url: url
        });
      },
      addComment: function(parent, text) {
        var msgObject = {
          api_type: 'json',
          text: encodeURIComponent(text),
          thing_id: parent
        };
        return $http.post(addCommentUrl, msgObject);
      }
    };
  });
