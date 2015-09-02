'use strict';

/**
 * @ngdoc function
 * @name redditAngularApp.controller:ArticlelistCtrl
 * @description
 * # ArticlelistCtrl
 * Controller of the redditAngularApp
 */
angular.module('redditAngularApp')
  .controller('ArticleListCtrl', function($scope, $routeParams, ArticlesRepositoryService) {
    $scope.list = ArticlesRepositoryService;
    $scope.errorMessage = undefined;

    $scope.linkForArticle = function(article) {
      return article ? '/article/' + article.subreddit + '/' + article.id : '';
    };

    $scope.linkPrevPage = function() {
      return ArticlesRepositoryService.articleBefore ? //
        'before/' + ArticlesRepositoryService.articleBefore //
        : '';
    };

    $scope.linkNextPage = function() {
      return ArticlesRepositoryService.articleAfter ? //
        'after/' + ArticlesRepositoryService.articleAfter //
        : '';
    };

    ArticlesRepositoryService
      .refreshList($routeParams.direction, $routeParams.last)
      .then(function() {
        $scope.errorMessage = undefined;
      }, function(data, status) {
        $scope.errorMessage = 'An error occured, please check your request. Errorcode: ' + status;
      });


  });
