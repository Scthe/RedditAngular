'use strict';

describe('Controller: ArticlelistCtrl', function() {

  // load the controller's module
  beforeEach(module('redditAngularApp'));


  var scope, $controller;

  beforeEach(inject(function(_$controller_) {
    scope = {};
    $controller = _$controller_;
  }));

  it('sets the error message if articles are unavailable', function() {
    instantiateController({
      getListSuccess: false
    });
    // Propagate promise resolution to 'then' functions using $apply().
    // $rootScope.$apply();
    expect(scope.errorMessage).toBeDefined();
  });



  it('has articles list', function() {
    instantiateController({
      getListSuccess: true
    });
    // Propagate promise resolution to 'then' functions using $apply().
    // $rootScope.$apply();
    expect(scope.list).toBeDefined();
  });

  describe('pagination', function() {
    describe('-previous page-', function() {
      it('gives correct link if previous page exists', function() {
        instantiateController({
          getListSuccess: true,
          articleBefore: '0000' // TODO use faker
        });
        expect(scope.linkPrevPage()).toBe('before/0000');
      });

      it('returns empty link if there is no previous page', function() {
        instantiateController({});
        expect(scope.linkPrevPage()).toBe('');
      });
    });

    describe('-next page-', function() {
      it('gives correct link if next page exists', function() {
        instantiateController({
          getListSuccess: true,
          articleAfter: '0000' // TODO use faker
        });
        expect(scope.linkNextPage()).toBe('after/0000');
      });

      it('returns empty link if there is no next page', function() {
        instantiateController({});
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

      instantiateController({});
      expect(scope.linkForArticle(fakeArticle)).toBe(expectUrl);
    });

    it('is empty if there is no article', function() {
      instantiateController({});
      expect(scope.linkForArticle()).toBe('');
    });
  });

  describe('route parameters', function() {
    it('are used to read articles list', function() {
      instantiateController({}, '0000', '1111');
      expect(scope.__service.refreshList).toHaveBeenCalledWith('0000', '1111');
    });

    it('can be empty', function() {
      instantiateController({});
      expect(scope.__service.refreshList).toHaveBeenCalledWith(undefined, undefined);
    });
  });

  function instantiateController(articlesStatus, routeDir, routeLast) {
    // TODO major refactor
    var articles = ['article1', 'article2'],
      mockPromise = {
        // each, this extremely stupid way to deal with testing of async
        // functions, but I hate testing async code. And documentation for
        // $rootScope.$apply(); is vague at best.
        then: function(succCallback, errCallback) {
          if (articlesStatus.getListSuccess) {
            succCallback(articles);
          } else {
            errCallback('something went wrong', 404);
          }
        }
      },
      mockService = {
        refreshList: function() {
          return mockPromise;
        },
        articleBefore: articlesStatus.articleBefore,
        articleAfter: articlesStatus.articleAfter
      };
    spyOn(mockService, 'refreshList').and.callThrough();

    scope.__service = mockService;

    return $controller('ArticleListCtrl', {
      $scope: scope,
      $routeParams: {
        direction: routeDir,
        last: routeLast
      },
      ArticlesRepositoryService: mockService
    });
  }

});
