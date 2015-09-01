'use strict';

/**
 * @ngdoc function
 * @name redditAngularApp.controller:ArticlelistCtrl
 * @description
 * # ArticlelistCtrl
 * Controller of the redditAngularApp
 */
angular.module('redditAngularApp')
  .controller('ArticleListCtrl', function($scope, ArticlesRepositoryService) {
    $scope.list = ArticlesRepositoryService;

    ArticlesRepositoryService.refreshList()
      .then(function(data) {
          console.log('Articles list refreshed');
        },
        function(data, status) {
          // self.errorMessage = 'An error occured, please check your request. Errorcode: ' + status;
          console.error('error: ' + status);
        });

  });
