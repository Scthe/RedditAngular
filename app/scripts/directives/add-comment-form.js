'use strict';

/**
 * @ngdoc directive
 * @name redditAngularApp.directive:addCommentForm
 * @description
 * # addCommentForm
 */
angular.module('redditAngularApp')
  .directive('addCommentForm', function () {
    return {
      templateUrl: 'views/add-comment-form.html',
      restrict: 'E'
    };
  });
