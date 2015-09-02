'use strict';

/**
 * @ngdoc function
 * @name redditAngularApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the redditAngularApp
 */
angular.module('redditAngularApp')
  .controller('ArticleCtrl',
    function($scope, $routeParams, ArticlesRepositoryService) {
      var id = $routeParams.articleId,
        sub = $routeParams.subreddit;

      $scope.article = undefined;

      ArticlesRepositoryService.get(id, sub)
        .then(function(article) {
          $scope.article = article;
        }, function() {
          console.error('GET article error');
        });
    });
