'use strict';

onlineExchange.controller('AdminUserCtrl', ['$scope', '$location', '$route', 'AdminUserResource',
    'notifier', 'identity',
    function AdminUserCtrl($scope, $location, $route, AdminUserResource, notifier, identity) {
        $scope.request = {SortBy: 'UserName', pageSize: 5, startPage: 1};
        $scope.identity = identity;

        $scope.AllData = AdminUserResource.getAllUsers($scope.request);

        $scope.pageFilter = function (request) {
            AdminUserResource.getAllUsers(request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                });
        };

        $scope.delete = function (id) {
            $location.path("/admin/user/delete/" + id);
        };

        $scope.edit = function (id) {
            $location.path("/admin/user/edit/" + id);
        };

        $scope.sortBy = function () {
            if ($scope.request.SortBy == 'UserName') {
                $scope.request.SortBy = '-UserName';
            } else {
                $scope.request.SortBy = 'UserName';
            }
            $route.reload();
        };
    }
])

