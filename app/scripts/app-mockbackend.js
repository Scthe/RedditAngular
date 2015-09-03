'use strict';

/**
 * @ngdoc overview
 * @name redditAngularApp.mockbackend
 * @description
 * # mockbackend
 *
 * Override HTTP requests for predefined urls. The main purpose is to mock
 * the comment add functionality from reddit api (it requires OAuth,
 * which we don't have). This file may need to be modified in the future
 * if backend changes.
 */
angular.module('redditAngularApp')
  .run(function($httpBackend, Config) {
    var baseUrl = Config.API.protocol + ':\/\/' + Config.API.host + '\/' + Config.API.path + '\/',
      addCommentUrl = Config.API.protocol + ':\/\/' + Config.API.host + '\/api\/comment';

    // Don't mock the html views
    $httpBackend.whenGET(/views\//).passThrough();

    // Normal reddit queries - allow
    $httpBackend.whenGET(new RegExp(baseUrl)).passThrough();

    // Adding comment requires OAuth. Since we don't have one, we will mock it here
    $httpBackend
      .whenPOST(new RegExp(addCommentUrl))
      .respond(function(method, url, data, headers) {
        // now we are going to assume everthing went ok
        // and return OK response
        var message = angular.fromJson(data);
        return [200, message, { headers }];
      });
  });
