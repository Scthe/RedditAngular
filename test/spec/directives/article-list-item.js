'use strict';

describe('Directive: ArticleListItem', function () {

  // load the directive's module
  beforeEach(module('redditAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-article-list-item></-article-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ArticleListItem directive');
  }));
});
