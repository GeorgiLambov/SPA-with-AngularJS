'use strict';

onlineExchange.controller('AdminUserCtrl', ['$scope', '$location', 'AdminUserResource', 'PublicAdsResource',
    'notifier', 'identity', 'pageSize',
    function AdminUserCtrl($scope, $location, AdminUserResource, PublicAdsResource, notifier, identity, pageSize) {
        $scope.request = {SortBy: 'UserName', pageSize: 5, startPage: 1};
        $scope.identity = identity;

        $scope.allUsers = AdminUserResource.getAllUsers($scope.request);

        $scope.pageFilter = function (request) {
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.delete = function (selectedId) {
            $location.path("/admin/ads/delete/" + selectedId);
        };

        $scope.edit = function (selectedId) {
            $location.path("/admin/ads/edit/" + selectedId);
        };
    }
])

