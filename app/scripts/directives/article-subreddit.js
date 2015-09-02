'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleSubreddit
 * @description
 * # articleSubreddit
 */
angular.module('redditAngularApp')
  .directive('articleSubreddit', function () {
    return {
       templateUrl: 'views/article-subreddit.html',
      scope: {
        article: '=article'
      },
      restrict: 'E'
    };
  });
