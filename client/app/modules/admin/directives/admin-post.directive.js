(function() {
  'use strict';

  angular.module('admin-post.directive', [])

    .directive('postCategory', [function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          info: '='
        },
        template: '<a ng-transclude ng-class="{chosen: isChosen}" class="category-item"></a>',
        link: function(scope, element, attrs) {
          scope.isChosen = false;
          element.bind('click', function() {
            scope.isChosen = ! scope.isChosen;
            scope.$apply();
          });
        }
      }
    }])

    .directive('categoryItemManagement', [function() {
      return {
        restrict: 'E',
        scope: {
          info: '='
        },
        templateUrl: 'app/modules/admin/views/blocks/categoryItemManagement.html',
        link: function(scope, element, attrs) {

        }
      }
    }])
    ;
})();
