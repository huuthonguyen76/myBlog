(function() {
  'use strict';

  angular.module('general.directive', [])

    .directive('post', [function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          'info': '='
        },
        templateUrl: 'app/modules/general/views/blocks/post.html'
      }
    }])
    ;
})();