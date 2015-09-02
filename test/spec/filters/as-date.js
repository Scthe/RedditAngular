'use strict';

describe('Filter: asDate', function () {

  // load the filter's module
  beforeEach(module('redditAngularApp'));

  // initialize a new instance of the filter before each test
  var asDate;
  beforeEach(inject(function ($filter) {
    asDate = $filter('asDate');
  }));

  it('should return the input prefixed with "asDate filter:"', function () {
    var text = 'angularjs';
    expect(asDate(text)).toBe('asDate filter: ' + text);
  });

});
