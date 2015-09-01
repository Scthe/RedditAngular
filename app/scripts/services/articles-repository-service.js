'use strict';

/**
 * @ngdoc service
 * @name redditAngularApp.ArticlesRepositoryService
 * @description
 * # ArticlesRepositoryService
 * Service in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .service('ArticlesRepositoryService', function(RedditApiService) {
    var self = this;
    self.articles = [];

    ///
    /// Read
    ///
    self.all = function() {
      return self.articles;
    };

    self.get = function(id) {
      var article;
      // search in articles we already have
      for (var i = 0; i < self.articles.length; i++) {
        var a = self.articles[i];
        if (a.id === id) {
          article = a;
        }
      }

      // TODO if not found download it

      return article; // TODO return promise
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
