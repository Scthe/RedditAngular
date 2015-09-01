'use strict';

describe('Service: ArticlesRepositoryService', function () {

  // load the service's module
  beforeEach(module('redditAngularApp'));

  // instantiate service
  var ArticlesRepositoryService;
  beforeEach(inject(function (_ArticlesRepositoryService_) {
    ArticlesRepositoryService = _ArticlesRepositoryService_;
  }));

  it('should do something', function () {
    expect(!!ArticlesRepositoryService).toBe(true);
  });

});
