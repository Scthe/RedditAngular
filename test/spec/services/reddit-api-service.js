'use strict';

describe('Service: RedditApiService', function () {

  // load the service's module
  beforeEach(module('redditAngularApp'));

  // instantiate service
  var RedditApiService;
  beforeEach(inject(function (_RedditApiService_) {
    RedditApiService = _RedditApiService_;
  }));

  it('should do something', function () {
    expect(!!RedditApiService).toBe(true);
  });

});
