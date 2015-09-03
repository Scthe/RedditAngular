'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:ArticleListItem
 * @description
 * # ArticleListItem
 * Single list item as displayed in articles list.
 */
angular.module('redditAngularApp')
  .directive('articleListItem', function () {
    return {
      templateUrl: 'views/article-list-item.html',
      restrict: 'E'
    };
  });
