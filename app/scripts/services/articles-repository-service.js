'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.ArticlesRepositoryService
 * @description
 * # ArticlesRepositoryService
 * Service in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .service('ArticlesRepositoryService', function($q, RedditApiService) {
    var self = this;
    self.articles = [];

    ///
    /// Read
    ///
    self.all = function() {
      return self.articles;
    };

    self.get = function(id, sub) {
      var article;
      // search in articles we already have
      for (var i = 0; i < self.articles.length; i++) {
        var a = self.articles[i];
        if (a.id === id) {
          article = a;
        }
      }

      if (article) {
        // found in the article list, wrap in promise
        var deferred = $q.defer();
        deferred.resolve(article);
        return deferred.promise;
      } else {
        // download the article
        return RedditApiService.getArticle(sub, id);
      }
    };

    ///
    /// Write
    ///
    self.refreshList = function() {
      return RedditApiService.getArticlesList()
        .then(function(resp) {
          // clear existing list
          while (self.articles.length) {
            self.articles.pop();
          }

          // add articles
          var list = resp.data.data.children;
          for (var i = 0; i < list.length; i++) {
            self.articles.push(list[i].data);
          }
        });
    };

  });
