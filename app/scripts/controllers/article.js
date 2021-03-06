'use strict';

/**
 * @ngdoc function
 * @name redditAngularApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller for displaying single article. Expects 'articleId'
 * and 'subreddit' available in the route. check in $scope.errorMessage
 * for any error messages
 */
angular.module('redditAngularApp')
  .controller('ArticleCtrl',
    function($scope, $routeParams, ArticlesRepositoryService) {
      var id = $routeParams.articleId,
        sub = $routeParams.subreddit;

      $scope.article = undefined;
      $scope.errorMessage = undefined;

      $scope.getArticleId = function() {
        return $scope.article === undefined ? '' : $scope.article.name;
      };

      ArticlesRepositoryService.get(id, sub)
        .then(function(article) {
          $scope.article = article;
          $scope.errorMessage = undefined;
        }, function() {
          $scope.errorMessage = 'An error occured, please check your request.';
        });

    });
