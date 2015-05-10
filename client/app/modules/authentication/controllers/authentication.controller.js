(function() {
  'use strict';

  angular.module('authentication.controller', [])

  	.controller('loginCtrl', ['$scope', 'myApiCall', 'myStorage', '$state', function($scope, myApiCall, myStorage, $state) {
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.login = function() {
        myApiCall.request('user/login', 'post', {
          username: $scope.user.username,
          password: $scope.user.password
        }).then(function(result) {
          myStorage.set('auth', {
            token : result.token,
            user  : result.user
          });
          $state.go('general.home');
        });
      }
  	}])

    .controller('registerCtrl', ['$scope', 'myApiCall', function($scope, myApiCall) {
      $scope.user = {
        username: '',
        password: ''
      };
      $scope.register = function() {
        myApiCall.request('user/register', 'post', {
          username: $scope.user.username,
          password: $scope.user.password
        }).then(function(result) {
          
        });
      }
    }])
  	;
})();