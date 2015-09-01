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
    self.articleBefore = undefined;
    self.articleAfter = undefined;

    ///
    /// Get
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
        return RedditApiService.getArticle(sub, id)
          .then(function(resp) {
            // that's kind of a weird mapping we have to do here..
            return resp.data[0].data.children[0].data;
          });
      }
    };

    ///
    /// Actions
    ///
    self.refreshList = function(direction, last) {
      // params check
      if (direction !== 'after' && direction !== 'before') {
        direction = undefined;
        last = undefined;
      }

      return RedditApiService.getArticlesList(direction, last)
        .then(function(resp) {
          // clear existing list
          while (self.articles.length) {
            self.articles.pop();
          }

          // add articles
          var respObj = resp.data.data;
          var list = respObj.children;
          for (var i = 0; i < list.length; i++) {
            self.articles.push(list[i].data);
          }

          // pagination
          self.articleBefore = respObj.before;
          self.articleAfter = respObj.after;
        });
    };

  });
