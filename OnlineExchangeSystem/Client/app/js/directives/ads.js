'use strict';

onlineExchange.directive('ads', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/ads.html',
        scope: true,
        replace: true
    }
}]);
