(function() {
  'use strict';

  angular.module('admin.controller', [])

  	.controller('adminCtrl', ['$scope', function($scope) {

  	}])

    .controller('adminDashboardCtrl', ['$scope', function($scope) {

  	}])

    .controller('adminAddPostCtrl', ['$scope', '$timeout', 'myApiCall', function($scope, $timeout, myApiCall) {
      $scope.post = {
        title: '',
        categories: [],
        content: '',
        avatar: ''
      }
      $scope.categories = [];
      myApiCall.request('category/listCategory', 'post')
        .then(function(categories) {
          $scope.categories = categories;
        });
      $scope.$on('category-chosen', function(event, mass) {
        if ($scope.post.categories.indexOf(mass) < 0) {
          $scope.post.categories.push(mass);
        } else {
          $scope.post.categories.splice($scope.post.categories.indexOf(mass), 1);
        }
      });
  	}])

    .controller('adminCategoryManagementCtrl', ['$scope', '$timeout', 'myApiCall', '$http', function($scope, $timeout, myApiCall, $http) {
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
          $scope.categories.unshift(angular.copy($scope.category));
          $scope.category.title = '';
        });
      }
  	}])
  	;
})();
