'use strict';

onlineExchange.controller('AdminEditCategoryCtrl', ['$scope', '$routeParams', '$location', 'AdminCategoriesResource',
    'notifier', 'identity',
    function AdminEditCategoryCtrl($scope, $routeParams, $location, AdminCategoriesResource, notifier, identity) {
        $scope.identity = identity;
        $scope.category = {
            id: $routeParams.id,
            name: $routeParams.name
        };

        $scope.edit = function () {
            AdminCategoriesResource.edit($scope.category, $scope.category.id)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement edited stressful.');
                    $location.path("/admin/categories");
                });
        };
    }
])

