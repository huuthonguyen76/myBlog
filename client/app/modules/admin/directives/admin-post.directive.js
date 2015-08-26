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
            scope.$emit('category-chosen', scope.info._id);
            scope.isChosen = ! scope.isChosen;
            scope.$apply();
          });
        }
      }
    }])

    .directive('group', [function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          info: '='
        },
        template: '<p id="abc" class="category-item">dasd</p><p id="abc" class="category-item">dasd</p>',
        link: function(scope, element, attrs) {
          var k = false;
          var rotate = 0;
          element.bind('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if ( ! k) {
              element.find('p').css('transform', 'translate(20px, 20px)');
              console.log('false');
              k = !k;
            } else {
              rotate += 90;
              element.css('transform', 'rotate(' + rotate + 'deg)');
              element.find('p').css('transform', 'rotate(' + -rotate + 'deg)');
              console.log('true');
            }
          });
        }
      }
    }])

    .directive('categoryItemManagement', ['$compile', function() {
      return {
        restrict: 'E',
        scope: {
          info: '='
        },
        templateUrl: 'app/modules/admin/views/blocks/categoryItemManagement.html',
        link: function(scope, element, attrs) {
          scope.isFocus = false;

          element.bind('mousedown', function() {
            if ( ! scope.isFocus) {
              scope.isFocus = true;
              scope.$apply();
            }
          });
          element.bind('focus', function() {
            alert('true');
          })
          element.bind('keypress', function(event) {
            if (event.which == 13) {
              scope.isFocus = false;
            } else {

            }
            console.log(event.which);
            scope.$apply();
          });
        }
      }
    }])
    ;
})();
