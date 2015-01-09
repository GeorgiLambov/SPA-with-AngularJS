'use strict';

onlineExchange.controller('AdminDeleteCategoryCtrl', ['$scope', '$routeParams', '$location', 'AdminCategoriesResource',
    'notifier', 'identity',
    function AdminDeleteCategoryCtrl($scope, $routeParams, $location, AdminCategoriesResource, notifier, identity) {
        $scope.identity = identity;
        $scope.selectedId = $routeParams.id;
        $scope.categoryName = $routeParams.name;

        $scope.delete = function () {
            AdminCategoriesResource.delete($scope.selectedId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/admin/categories");
                });
        };
    }
])
