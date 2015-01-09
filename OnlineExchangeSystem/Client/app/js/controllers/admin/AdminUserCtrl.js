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

        $scope.delete = function (user) {
            $location.path("/admin/user/delete/" + user);
        };

        $scope.edit = function (user) {
            $location.path("/admin/user/edit/" + user);
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

