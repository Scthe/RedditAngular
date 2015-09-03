'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleDate
 * @description
 * # articleDate
 * Directive for formatted display of article's creation date metadata.
 */
angular.module('redditAngularApp')
  .directive('articleDate', function () {
    return {
      templateUrl: 'views/article-date.html',
      scope: {
        article: '=article'
      },
      restrict: 'E'
    };
  });
