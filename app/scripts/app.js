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
    'ngRoute'
  ])
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
