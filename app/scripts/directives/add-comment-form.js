'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:addCommentForm
 * @description
 * # addCommentForm
 * Used with add-comment-form.html, expects article provided with
 * 'parent' attribute. Exposes $scope.showSend, $scope.showSuccess
 * and $scope.showError for notification purposes.
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
        $scope.showSend = false;
        $scope.showSuccess = false;
        $scope.showError = false;

        $scope.submitData = function() {
          // reset text input, do not allow to send more comments
          // till response received, show information to the user
          var text = $scope.text;
          $scope.text = '';
          $scope.showSend = true;

          RedditApiService.addComment($scope.parent, text)
            .then(function() {
                $scope.showSuccess = true;
              },
              function() {
                $scope.showError = true;
              })
            .finally(function() {
              $scope.showSend = false;
            });
        };

      }
    };
  });
