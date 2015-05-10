(function() {
  'use strict';

  angular.module('general.controller', [])

  	.controller('generalCtrl', ['$scope', '$interval', 'myStorage', '$state', function($scope, $interval, myStorage, $state) {
      /*if ( ! myStorage.get('auth')) {
        $state.go('login');
      }*/
  	}])

    .controller('generalHomeCtrl', ['$scope', 'myApiCall', '$timeout', 'myStorage', function($scope, myApiCall, $timeout, myStorage) {      
      $scope.posts = [];

      myApiCall.request('post/listPost', 'post').then(function(result) {
        $scope.posts = result;
      });
    }])
  	;
})();