'use strict';

onlineExchange.filter('filterTown', function () {

    return function (input, scope) {
        var allTowns = scope.towns;

        for (var i = 0; i < allTowns.length; i++) {
            if (input == allTowns.id) {
                return allTowns.name;
            }
        }
        return '(None)';
    }
});