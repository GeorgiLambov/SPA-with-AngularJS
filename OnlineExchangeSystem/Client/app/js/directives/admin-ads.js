'use strict';

onlineExchange.directive('admin-ads', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/admin-ads.html',
        scope: true,
        replace: true
    }
}]);
