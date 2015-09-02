'use strict';

describe('Directive: articleSubreddit', function () {

  // load the directive's module
  beforeEach(module('redditAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<article-subreddit></article-subreddit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the articleSubreddit directive');
  }));
});
