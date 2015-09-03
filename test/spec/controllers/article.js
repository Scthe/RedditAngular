'use strict';

describe('Controller: ArticleCtrl', function() {

  // load the controller's module
  beforeEach(module('redditAngularApp'));

  var scope, $controller;

  beforeEach(inject(function(_$controller_) {
    scope = {};
    $controller = _$controller_;
  }));

  it('sets the error message if article is unavailable', function() {
    instantiateController();
    // Propagate promise resolution to 'then' functions using $apply().
    // $rootScope.$apply();
    expect(scope.errorMessage).toBeDefined();
    expect(scope.article).toBeUndefined();

  });

  it('has article', function() {
    var fakeArticle = {
      title: '000'
    };
    instantiateController(fakeArticle);
    // Propagate promise resolution to 'then' functions using $apply().
    // $rootScope.$apply();
    expect(scope.article).toBeDefined(fakeArticle);
    expect(scope.errorMessage).toBeUndefined();
  });

  describe('article id', function() {
    it('is correct if article exists', function() {
      var fakeArticle = {
        name: '000'
      };
      instantiateController(fakeArticle);
      expect(scope.getArticleId()).toBe(fakeArticle.name);
    });

    it('is empty if there is no article', function() {
      instantiateController();
      expect(scope.getArticleId()).toBe('');
    });

  });

  it('uses route parameters to find article', function() {
    instantiateController({}, '0000', '1111');
    expect(scope.__service.get).toHaveBeenCalledWith('0000', '1111');
  });

  function instantiateController(article, routeId, routeSub) {
    // TODO major refactor
    var mockPromise = {
        // each, this extremely stupid way to deal with testing of async
        // functions, but I hate testing async code. And documentation for
        // $rootScope.$apply(); is vague at best.
        then: function(succCallback, errCallback) {
          if (article !== undefined) {
            succCallback(article);
          } else {
            errCallback('something went wrong', 404);
          }
        }
      },
      mockService = {
        get: function() {
          return mockPromise;
        }
      };
    spyOn(mockService, 'get').and.callThrough();

    scope.__service = mockService;

    return $controller('ArticleCtrl', {
      $scope: scope,
      $routeParams: {
        articleId: routeId,
        subreddit: routeSub
      },
      ArticlesRepositoryService: mockService
    });
  }

});
