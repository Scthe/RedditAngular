'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleAuthor
 * @description
 * # articleAuthor
 */
angular.module('redditAngularApp')
  .directive('articleAuthor', function () {
    return {
      templateUrl: 'views/article-author.html',
      scope: {
        article: '=article'
      },
      restrict: 'E'
    };
  });
