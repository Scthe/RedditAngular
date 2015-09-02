'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:addCommentForm
 * @description
 * # addCommentForm
 */
angular.module('redditAngularApp')
  .directive('addCommentForm', function() {
    return {
      templateUrl: 'views/add-comment-form.html',
      restrict: 'E',
      scope: {
        parent: '=parent'
      },
      controller: function($scope, RedditApiService) {

        $scope.text = '';

        $scope.submitData = function() {
          RedditApiService.addComment($scope.parent, $scope.text);
          $scope.text = '';
        };

      }
    };
  });
