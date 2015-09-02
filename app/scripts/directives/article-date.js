'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:articleDate
 * @description
 * # articleDate
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
