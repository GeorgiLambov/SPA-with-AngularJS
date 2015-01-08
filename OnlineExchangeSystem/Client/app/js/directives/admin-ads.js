'use strict';

onlineExchange.directive('adminads', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/admin-ads.html',
        scope: true,
        replace: true
    }
}]);
