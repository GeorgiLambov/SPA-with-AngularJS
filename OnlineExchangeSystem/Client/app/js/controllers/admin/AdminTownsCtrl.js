'use strict';

onlineExchange.controller('AdminTownsCtrl', ['$scope', '$location', '$route', 'AdminTownsResource',
    'notifier', 'identity',
    function AdminTownsCtrl($scope, $location, $route, AdminTownsResource, notifier, identity) {
        $scope.request = {SortBy: 'Id', pageSize: 10, startPage: 1};
        $scope.identity = identity;
        $scope.AllData = AdminTownsResource.getAll($scope.request);

        $scope.pageFilter = function (request) {
            AdminTownsResource.getAll(request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                });
        };

        $scope.delete = function (town) {
            $location.path("/admin/town/delete/" + town.id + '/' + town.username);
        };

        $scope.edit = function (town) {
            $location.path("/admin/town/edit/" + town.id + '/' + town.username);
        };

        $scope.sortByName = function () {
            if ($scope.request.SortBy == 'Name') {
                $scope.request.SortBy = '-Name';
            } else {
                $scope.request.SortBy = 'Name';
            }
            $scope.AllData = AdminTownsResource.getAll($scope.request);
        };

        $scope.sortById = function () {
            if ($scope.request.SortBy == 'Id') {
                $scope.request.SortBy = '-Id';
            } else {
                $scope.request.SortBy = 'Id';
            }
            $scope.AllData = AdminTownsResource.getAll($scope.request);
        }
    }
])

