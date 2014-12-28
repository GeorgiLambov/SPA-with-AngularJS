'use strict';

onlineExchange.filter('filterByCategory', [function () {
    return function (ads, driverId) {
        if (!driverId) {
            return ads;
        }

        ads = ads || [];
        var result = [];
        for (var i = 0; i < ads.length; i++) {
            if (ads[i].driverId == driverId) {
                result.push(ads[i]);
            }
        }

        return result;
    }
}]);
