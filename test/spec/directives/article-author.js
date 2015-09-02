'use strict';

describe('Directive: articleAuthor', function () {

  // load the directive's module
  beforeEach(module('redditAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<article-author></article-author>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the articleAuthor directive');
  }));
});
