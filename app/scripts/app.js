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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/articleList', {
        templateUrl: 'views/article-list.html',
        controller: 'ArticleListCtrl',
        controllerAs: 'article-list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
