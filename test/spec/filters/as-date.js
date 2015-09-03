'use strict';

describe('Filter: asDate', function() {

  beforeEach(module('redditAngularApp'));

  var asDate;
  beforeEach(inject(function($filter) {
    asDate = $filter('asDate');
  }));

  it('returns Date object', function() {
    expect(asDate(0)).toEqual(jasmine.any(Date));
  });

  it('offsets the timestamp', function() {
    expect(asDate(1441206589).getFullYear()).toBeGreaterThan(1970);
  });

  it('returns correct date', function() {
    expect(asDate(1441206589)).toEqual(new Date('2015-09-02T15:09:49+00:00'));
  });

});
