'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:ArticleListItem
 * @description
 * # ArticleListItem
 */
angular.module('redditAngularApp')
  .directive('articleListItem', function () {
    return {
      templateUrl: 'views/article-list-item.html',
      restrict: 'E'
    };
  });
