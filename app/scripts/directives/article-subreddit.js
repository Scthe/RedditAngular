'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleSubreddit
 * @description
 * # articleSubreddit
 * Directive for formatted display of article's parent subreddit metadata.
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
