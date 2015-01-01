'use strict';

onlineExchange.directive('pager', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/pager.html',
        link: function (scope) {
            scope.firstPage = function () {
                scope.request.startPage = 1;
                scope.pageFilter(scope.request);
            }
            scope.previousPage = function () {
                if (scope.request.startPage > 1) {
                    scope.request.startPage--;
                    scope.pageFilter(scope.request);
                }
            }
            scope.currentPage = function (currentPage) {
                scope.request.startPage = currentPage;
                scope.pageFilter(scope.request);
            }
            scope.nextPage = function () {
                scope.request.startPage++;
                scope.pageFilter(scope.request);
            }
            scope.lastPage = function (lastPage) {
                scope.request.startPage = lastPage;
                scope.pageFilter(scope.request);
            }
            scope.getPageSize = function () {
                scope.pageFilter(scope.request);
            }
        }
    }
}]);