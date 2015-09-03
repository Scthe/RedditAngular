'use strict';

describe('Controller: ArticlelistCtrl', function() {

  // load the controller's module
  beforeEach(module('redditAngularApp'));

  var ArticlelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlelistCtrl = $controller('ArticleListCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  /*
  it('should attach a list of awesomeThings to the scope', function () {
    // expect(ArticlelistCtrl.awesomeThings.length).toBe(3);
    expect(true).toBeTruthy();
  });
  */

  it('sets the error message if articles are unavailable', function() {
    //
  });

  it('has articles list', function() {
    //
  });

  describe('pagination', function() {
    describe('-previous page-', function() {
      it('gives correct link if previous page exists', function() {
        //
      });

      it('returns empty link if there is no previous page', function() {
        //
      });
    });

    describe('-next page-', function() {
      it('gives correct link if next page exists', function() {
        //
      });

      it('returns empty link if there is no next page', function() {
        //
      });
    });
  });

 describe('article link', function() {
    it('exists if article provided', function() {
      //
    });

    it('is empty if there is no article', function() {
      //
    });
  });

  describe('route parameters', function() {
    it('are used to read articles list', function() {
      //
    });

    it('can be empty', function() {
      //
    });
  });

});
