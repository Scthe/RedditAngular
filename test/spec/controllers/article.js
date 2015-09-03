'use strict';

describe('Controller: ArticleCtrl', function() {

  // load the controller's module
  beforeEach(module('redditAngularApp'));

  var scope, $q, $rootScope, $controller, routeParams, articleRepositoryService;

  beforeEach(function() {
    module(function($provide) {
      articleRepositoryService = {};
      $provide.service('ArticlesRepositoryService', function() {
        return articleRepositoryService;
      });
    });
  });

  beforeEach(inject(function(_$rootScope_, _$q_, _$controller_) {
    scope = {};
    routeParams = {};
    $q = _$q_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  function instantiateController() {
    return $controller('ArticleCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      ArticlesRepositoryService: articleRepositoryService
    });
  }

  it('sets the error message if article is unavailable', function() {
    articleRepositoryService.get = function() {
      return $q.reject('some error');
    };

    instantiateController();
    $rootScope.$apply();

    expect(scope.errorMessage).toBeDefined();
    expect(scope.article).toBeUndefined();
  });


  it('has article', function() {
    var fakeArticle = {
      title: '000'
    };
    articleRepositoryService.get = function() {
      return $q.when(fakeArticle);
    };

    instantiateController();
    $rootScope.$apply();

    expect(scope.article).toBeDefined(fakeArticle);
    expect(scope.errorMessage).toBeUndefined();
  });

  describe('article id', function() {
    it('is correct if article exists', function() {
      var fakeArticle = {
        name: '000'
      };
      articleRepositoryService.get = function() {
        return $q.when(fakeArticle);
      };

      instantiateController();
      $rootScope.$apply();

      expect(scope.getArticleId()).toBe(fakeArticle.name);
    });

    it('is empty if there is no article', function() {
      articleRepositoryService.get = function() {
        return $q.reject('some error');
      };

      instantiateController();
      $rootScope.$apply();

      expect(scope.getArticleId()).toBe('');
    });

  });

  it('uses route parameters to find article', function() {
    articleRepositoryService.get = function() {
      return $q.when({});
    };
    spyOn(articleRepositoryService, 'get').and.callThrough();
    routeParams.articleId = '0000';
    routeParams.subreddit = '1111';

    instantiateController();
    $rootScope.$apply();

    expect(articleRepositoryService.get).toHaveBeenCalledWith('0000', '1111');
  });

});
