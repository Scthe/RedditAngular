'use strict';

describe('Service: ArticlesRepositoryService', function() {

  // load the service's module
  beforeEach(module('redditAngularApp'));


  // instantiate service
  var $q, $rootScope, articlesRepositoryService, redditApiService;

  beforeEach(function() {
    module(function($provide) {
      redditApiService = {};
      $provide.service('RedditApiService', function() {
        return redditApiService;
      });
    });
  });

  beforeEach(inject(function(_$rootScope_, _$q_, _ArticlesRepositoryService_) {
    articlesRepositoryService = _ArticlesRepositoryService_;
    $rootScope = _$rootScope_;
    $q = _$q_;
  }));

  describe('get article', function() {
    it('checks downloaded articles', function(done) {
      var article = {
        id: '0000',
        title: 'article1'
      };
      articlesRepositoryService.articles = [article];

      articlesRepositoryService.get(article.id)
        .then(function(article2) {
          expect(article2).toBe(article);
          done();
        });

      $rootScope.$apply();
    });

    it('downloads the article', function(done) {
      var article = {
          title: 'article1'
        },
        wrappedArticle = {
          data: [{
            data: {
              children: [{
                data: article
              }]
            }
          }]
        };

      redditApiService.getArticle = function() {
        return $q.when(wrappedArticle);
      };

      articlesRepositoryService.get(0, 1)
        .then(function(article2) {
          expect(article2).toBe(article);
          done();
        });
      $rootScope.$apply();
    });

  });

  describe('refresh articles', function() {
    it('downloads the articles', function(done) {
      var articles = [{
          data: 'article1'
        }, {
          data: 'article2'
        }],
        articlesWrapped = {
          data: {
            data: {
              children: articles
            }
          }
        };
      articlesRepositoryService.articles = [articles[1]];

      redditApiService.getArticlesList = function() {
        return $q.when(articlesWrapped);
      };

      articlesRepositoryService.refreshList()
        .then(function() {
          // jasmine has problems with comparing arrays
          var as = articlesRepositoryService.all();
          expect(as.length).toBe(2);
          expect(as[0]).toBe('article1');
          expect(as[1]).toBe('article2');
          done();
        });

      $rootScope.$apply();
    });

    it('updates paging data', function(done) {
      var before = '0000',
        after = '1111',
        articlesWrapped = {
          data: {
            data: {
              before: before,
              after: after,
              children: []
            }
          }
        };

      redditApiService.getArticlesList = function() {
        return $q.when(articlesWrapped);
      };

      articlesRepositoryService.refreshList()
        .then(function() {
          expect(articlesRepositoryService.articleBefore).toBe(before);
          expect(articlesRepositoryService.articleAfter).toBe(after);
          done();
        });

      $rootScope.$apply();
    });


  });


});
