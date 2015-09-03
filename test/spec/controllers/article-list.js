'use strict';

describe('Controller: ArticlelistCtrl', function() {

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
    return $controller('ArticleListCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      ArticlesRepositoryService: articleRepositoryService
    });
  }

  it('sets the error message if articles are unavailable', function() {
    articleRepositoryService.refreshList = function() {
      return $q.reject('some error');
    };

    instantiateController();
    $rootScope.$apply();

    expect(scope.errorMessage).toBeDefined();
  });

  it('has articles list', function() {
    var articles = ['article1', 'article2'];
    articleRepositoryService.refreshList = function() {
      return $q.when(articles);
    };

    instantiateController();
    $rootScope.$apply();

    expect(scope.list).toBeDefined();
  });


  describe('pagination', function() {

    describe('-previous page-', function() {
      it('gives correct link if previous page exists', function() {
        articleRepositoryService.refreshList = function() {
          return $q.when({});
        };
        articleRepositoryService.articleBefore = '0000';

        instantiateController();
        $rootScope.$apply();

        expect(scope.linkPrevPage()).toBe('before/0000');
      });

      it('returns empty link if there is no previous page', function() {
        articleRepositoryService.refreshList = function() {
          return $q.when({});
        };

        instantiateController();
        $rootScope.$apply();

        expect(scope.linkPrevPage()).toBe('');
      });
    });

    describe('-next page-', function() {
      it('gives correct link if next page exists', function() {
        articleRepositoryService.refreshList = function() {
          return $q.when({});
        };
        articleRepositoryService.articleAfter = '0000';

        instantiateController();
        $rootScope.$apply();

        expect(scope.linkNextPage()).toBe('after/0000');
      });

      it('returns empty link if there is no next page', function() {
        articleRepositoryService.refreshList = function() {
          return $q.when({});
        };

        instantiateController();
        $rootScope.$apply();

        expect(scope.linkNextPage()).toBe('');
      });
    });

  });

  describe('article link', function() {
    it('exists if article provided', function() {
      var fakeArticle = {
          subreddit: '111',
          id: '222'
        },
        expectUrl = '/article/' + fakeArticle.subreddit + '/' + fakeArticle.id;

      articleRepositoryService.refreshList = function() {
        return $q.when({});
      };
      instantiateController();
      $rootScope.$apply();

      expect(scope.linkForArticle(fakeArticle)).toBe(expectUrl);
    });

    it('is empty if there is no article', function() {
      articleRepositoryService.refreshList = function() {
        return $q.when({});
      };
      instantiateController();
      $rootScope.$apply();

      expect(scope.linkForArticle()).toBe('');
    });
  });

  describe('route parameters', function() {
    it('are used to read articles list', function() {
      articleRepositoryService.refreshList = function() {
        return $q.when({});
      };
      spyOn(articleRepositoryService, 'refreshList').and.callThrough();
      routeParams.direction = '0000';
      routeParams.last = '1111';

      instantiateController();
      $rootScope.$apply();

      expect(articleRepositoryService.refreshList).toHaveBeenCalledWith('0000', '1111');
    });

    it('can be empty', function() {
      articleRepositoryService.refreshList = function() {
        return $q.when({});
      };
      spyOn(articleRepositoryService, 'refreshList').and.callThrough();

      instantiateController();
      $rootScope.$apply();

      expect(articleRepositoryService.refreshList).toHaveBeenCalledWith(undefined, undefined);
    });
  });

});
