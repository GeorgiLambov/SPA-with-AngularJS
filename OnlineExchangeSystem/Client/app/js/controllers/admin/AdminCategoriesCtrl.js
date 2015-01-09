'use strict';

onlineExchange.controller('AdminCategoriesCtrl', ['$scope', '$location', '$route', 'AdminCategoriesResource',
    'notifier', 'identity',
    function AdminCategoriesCtrl($scope, $location, $route, AdminCategoriesResource, notifier, identity) {
        $scope.request = {SortBy: 'Name', pageSize: 10, startPage: 1};
        $scope.identity = identity;
        $scope.AllData = AdminCategoriesResource.getAll($scope.request);

        $scope.pageFilter = function (request) {
            AdminCategoriesResource.getAll(request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                });
        };

        $scope.delete = function (category) {
            $location.path("/admin/category/delete/" + category.id + '/' + category.username);
        };

        $scope.edit = function (category) {
            $location.path("/admin/category/edit/" + category.id + '/' + category.username);
        };

        $scope.sortBy = function () {
            if ($scope.request.SortBy == 'UserName') {  //todo
                $scope.request.SortBy = '-UserName';
            } else {
                $scope.request.SortBy = 'UserName';
            }
            $route.reload();
        };
    }
])

