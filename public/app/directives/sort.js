'use strict';

angular
  .module('app')
  .directive("sort", function () {
    return {
      restrict: 'A',
      transclude: true,
      template: '<a ng-click="onClick()">' +
      '<span ng-transclude></span>' +
      '<i class="fa" ng-class="{\'fa-sort-desc\' : order === by && !reverse,  \'fa-sort-asc\' : order===by && reverse}"></i>' +
      '</a>',
      scope: {
        order: '=',
        by: '=',
        reverse: '='
      },
      link: function (scope) {
        scope.onClick = function () {
          if (scope.order === scope.by) {
            scope.reverse = !scope.reverse;
          } else {
            scope.by = scope.order;
            scope.reverse = false;
          }
        }
      }
    }
  });