'use strict';

onlineExchange.controller('AdminCreateCategoryCtrl', ['$scope', '$routeParams', '$location', 'AdminCategoriesResource',
    'notifier', 'identity',
    function AdminCreateCategoryCtrl($scope, $routeParams, $location, AdminCategoriesResource, notifier, identity) {
        $scope.identity = identity;
        $scope.category = {
            name: $routeParams.name
        };

        $scope.create = function () {
            AdminCategoriesResource.create($scope.category, $scope.category.id)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement edited stressful.');
                    $location.path("/admin/categories");
                });
        };
    }
])

