'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleAuthor
 * @description
 * # articleAuthor
 * Directive for formatted display of article's author metadata.
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
