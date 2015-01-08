'use strict';

onlineExchange.controller('AdminHomeCtrl', ['$scope', '$route', '$location', 'AdminAdsResource', 'PublicAdsResource',
    'notifier', 'identity', 'pageSize',
    function AdminHomeCtrl($scope, $route, $location, AdminAdsResource, PublicAdsResource, notifier, identity, pageSize) {
        $scope.request = {pageSize: 2, startPage: 1, townId: '', categoryId: ''};
        $scope.identity = identity;

        $scope.allAds = AdminAdsResource.getAllAds($scope.request);
        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.pageFilter = function (request) {
            AdminAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.filterByCategoryAndTown = function (request) {
            request.startPage = 1;
            AdminAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };

        $scope.filterByStatus = function (selectedStatus) {
            $scope.request.status = selectedStatus;
            $scope.request.startPage = 1;
            AdminAdsResource.getAllAds($scope.request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };

        $scope.approve = function (selectedId) {
            AdminAdsResource.approve(selectedId)
                .$promise
                .then(function () {
                    $route.reload();
                    notifier.success('Approve successful!');
                });
        };

        $scope.reject = function (selectedId) {
            AdminAdsResource.reject(selectedId)
                .$promise
                .then(function () {
                    $route.reload();
                    notifier.success('Reject successful!');
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
