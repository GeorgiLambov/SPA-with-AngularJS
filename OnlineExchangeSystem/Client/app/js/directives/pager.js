'use strict';

onlineExchange.directive('pager', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/pager.html',
        link: function (scope) {
            scope.firstPage = function () {
                scope.request.startPage = 1;
                scope.filter(scope.request);
            }
            scope.previousPage = function () {
                if (scope.request.startPage > 1) {
                    scope.request.startPage--;
                    scope.filter(scope.request);
                }
            }

            scope.currentPage = function () {
                scope.request.startPage++;
                scope.filter(scope.request);
            }

            scope.nextPage = function () {
                scope.request.startPage++;
                scope.filter(scope.request);
            }
            scope.lastPage = function () {
                //todo  scope.request.startPage= last;

                scope.filter(scope.request);
            }
            scope.getPageSize = function () {
                scope.filter(scope.request);
            }
        }
    }
}]);