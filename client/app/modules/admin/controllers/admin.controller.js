(function() {
  'use strict';

  angular.module('admin.controller', [])

  	.controller('adminCtrl', ['$scope', function($scope) {

  	}])

    .controller('adminDashboardCtrl', ['$scope', function($scope) {

  	}])

    .controller('adminAddPostCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  	}])

    .controller('adminCategoryManagementCtrl', ['$scope', '$timeout', 'myApiCall', '$http', function($scope, $timeout, myApiCall, $http) {
      $http.jsonp('http://myhost.com/coding/test.php?callback=JSON_CALLBACK').success(function(data) {
        console.log(data);
      });
      $scope.category = {
        title: ''
      };
      $scope.categories = [];
      myApiCall.request('category/listCategory', 'post')
        .then(function(categories) {
          $scope.categories = categories;
        });
      $scope.addCategory = function() {
        myApiCall.request('category/addCategory', 'post', {
          title: $scope.category.title
        }).then(function(result) {
          $scope.categories.shift(angular.copy($scope.category));
          $scope.category.title = '';
        });
      }
  	}])
  	;
})();
