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
      .then(function(data) {
          console.log('Articles list refreshed');
        },
        function(data, status) {
          // self.errorMessage = 'An error occured, please check your request. Errorcode: ' + status;
          console.error('error: ' + status);
        });



  });
