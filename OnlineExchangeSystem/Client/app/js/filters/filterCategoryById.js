'use strict';

onlineExchange.filter('filterCategory', function () {

    return function (input, scope) {
        var allCategory = scope.categories;

        for (var i = 0; i < allCategory.length; i++) {
            if (input == allCategory.id) {
                return allCategory.name;
            }
        }
        return '(None)';
    }
});
