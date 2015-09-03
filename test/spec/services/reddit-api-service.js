'use strict';

describe('Service: RedditApiService', function() {

  // load the service's module
  beforeEach(module('redditAngularApp'));

  // instantiate service
  var redditApiService, httpBackend, cfg;
  beforeEach(inject(function(_RedditApiService_, _$httpBackend_, _Config_) {
    redditApiService = _RedditApiService_;
    httpBackend = _$httpBackend_;
    cfg = _Config_;
  }));

  /*

  TODO Commented out because Angular for some reason messes up the $httpbackends.
  Needs to investigate. Possibly related to:
  https://github.com/angular/angular.js/issues/1434


  it("tries to download articles list", function(done) {
    var data = ['article1', 'article2'];

    var baseUrl = cfg.API.protocol + ':\/\/' + cfg.API.host + '\/' + cfg.API.path + '\/';
    httpBackend
      .whenGET(new RegExp(baseUrl))
      .respond(data);

    // httpBackend.whenGET(/.+/).passThrough(); // doesn't work either


    redditApiService.getArticlesList()
      .then(function(data) {
        expect(data.data).toEqual(data);
        done();
      });
    httpBackend.flush();
  });
  */

});
