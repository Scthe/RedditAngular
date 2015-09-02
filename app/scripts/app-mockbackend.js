'use strict';

/**
 * @ngdoc overview
 * @name redditAngularApp.mockbackend
 * @description
 * # mockbackend
 *
 * Main module of the application.
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
        var message = angular.fromJson(data);
        console.log('MOCK INTERCEPT');
        console.log(method);
        console.log(url);
        console.log(data);
        console.log(headers);

        return [200, message, { /*headers*/ }];
      });
  });
