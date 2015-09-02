'use strict';

/**
 * @ngdoc overview
 * @name redditAngularApp
 * @description
 * # redditAngularApp
 *
 * Main module of the application.
 */
angular
  .module('redditAngularApp', [
    'ngRoute',
    'ngMockE2E'
  ])
  .run(function($httpBackend) {
    $httpBackend.whenGET(/views\//).passThrough();
    $httpBackend.whenGET(/http:\/\/www.reddit.com\/r\//).passThrough();
  })
  .constant('Config', {
    itemsPerPage: 5,
    API: {
      protocol: 'http',
      host: 'www.reddit.com',
      path: 'r'
    }
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/:direction?/:last?', {
        templateUrl: 'views/article-list.html',
        controller: 'ArticleListCtrl',
        controllerAs: 'article-list'
      })
      .when('/article/:subreddit/:articleId', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'article'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
