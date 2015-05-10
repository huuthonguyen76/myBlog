(function() {
  'use strict';

  // Add all necessary modules
  require('../../bower_components/angular/angular.min.js');
  require('../../bower_components/angular-bootstrap/ui-bootstrap.min.js');
  require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js');

  require('./helpers/service.factory.js');
  require('./helpers/utilities.factory.js');

  require('./modules/authentication/controllers/authentication.controller.js');
  require('./modules/general/controllers/general.controller.js');
  require('./modules/general/directives/general.directive.js');

  require('./helpers/validate-input.filter.js');

  // Inject all depencies
  angular.
    module('myBlog', [
      'ui.router',
      'ui.bootstrap',
      'service.factory',
      'utilities.factory',
      'general.controller',
      'authentication.controller',
      'general.directive',
      'validate-input.filter'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

      // Inject stateProvider from depency ui-router for routing multi-views + nested-views
      $urlRouterProvider
        .otherwise('/general/home');
      $stateProvider
        .state('general', {
          url           : '/general',
          templateUrl   : 'app/modules/general/views/general.html',
          controller    : 'generalCtrl'
        })
        .state('general.home', {
          url           : '/home',
          templateUrl   : 'app/modules/general/views/home.html',
          controller    : 'generalHomeCtrl'
        })
        .state('general.test', {
          url           : '/test',
          templateUrl   : 'app/modules/general/views/home.html',
          controller    : 'generalTestCtrl'
        })
        .state('login', {
          url           : '/login',
          templateUrl   : 'app/modules/authentication/views/login.html',
          controller    : 'loginCtrl'
        })
        .state('register', {
          url           : '/register',
          templateUrl   : 'app/modules/authentication/views/register.html',
          controller    : 'registerCtrl'
        })
        .state('asd', {
          url           : '/asd',
          params        : {
            page: null
          }
        })
    });
})();