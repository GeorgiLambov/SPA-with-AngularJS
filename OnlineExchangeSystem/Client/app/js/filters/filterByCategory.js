'use strict';

onlineExchange.filter('filterByCategory', [function () {
    return function (ads) {

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

'use strict';

musicApp.filter('status', function() {
    return function(input) {
        input = parseInt(input);
        switch (input) {
            case 1: return "Discontinued"; break;
            case 2: return "Selling"; break;
            case 3: return "Unreleased"; break;
        }
    }
});
