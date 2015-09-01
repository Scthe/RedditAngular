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

      ArticlesRepositoryService.get(id, sub)
        .then(function(resp) {
          console.log(resp);
          var article = resp.data[0].data.children[0].data;
          // console.log(article);
          $scope.article = article;
        }, function() {
          console.error('GET article error');
        });
    });
