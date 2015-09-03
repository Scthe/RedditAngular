'use strict';

/**
 * @ngdoc filter
 * @name redditAngularApp.filter:asDate
 * @function
 * @description
 * # asDate
 * Filter in the redditAngularApp.
 */
angular.module('redditAngularApp')
  .filter('asDate', function () {
    return function (input) {
        // we have to offset the timestamp as per Date constructor
        return new Date(input * 1000);
    };
  });
