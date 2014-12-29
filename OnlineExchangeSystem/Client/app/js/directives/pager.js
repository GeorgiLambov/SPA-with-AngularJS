'use strict';

onlineExchange.directive('pager', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/pager.html',
        link: function (scope) {
            scope.firstPage = function () {
                scope.pageRequest.startPage = 1;
                scope.pageFilter(scope.pageRequest);
            }
            scope.previousPage = function () {
                if (scope.pageRequest.startPage > 1) {
                    scope.pageRequest.startPage--;
                    scope.pageFilter(scope.pageRequest);
                }
            }
            scope.currentPage = function (currentPage) {
                scope.pageRequest.startPage = currentPage;
                scope.pageFilter(scope.pageRequest);
            }
            scope.nextPage = function () {
                scope.pageRequest.startPage++;
                scope.pageFilter(scope.pageRequest);
            }
            scope.lastPage = function (lastPage) {
                scope.pageRequest.startPage = lastPage;
                scope.pageFilter(scope.pageRequest);
            }
            scope.getPageSize = function () {
                scope.pageFilter(scope.pageRequest);
            }
        }
    }
}]);