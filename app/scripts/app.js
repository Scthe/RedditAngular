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
        templateUrl: 'views/article-list.html',
        controller: 'ArticleListCtrl',
        controllerAs: 'article-list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
