'use strict';

onlineExchange.controller('UserAdsCtrl', ['$scope', '$location', '$route', 'UserAdsResource', 'identity', 'notifier', 'pageSize',
    function UserAdsCtrl($scope, $location, $route, UserAdsResource, identity, notifier, pageSize) {
        $scope.request = {pageSize: pageSize, startPage: 1};
        $scope.identity = identity;

        $scope.AllData = UserAdsResource.getUserAds($scope.request);

        $scope.pageFilter = function (request) {
            UserAdsResource.getUserAds($scope.request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                });
        };

        $scope.deactivate = function (adDataId) {
            UserAdsResource.deactivateUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement is now deactivate.');
                    $route.reload();
                });
        };
        $scope.publishAgain = function (adDataId) {
            UserAdsResource.publishAgainUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement submitted for publish again. Once approved, it will be published.');
                    $route.reload();
                });
        };

        $scope.delete = function (selectedId) {
            $location.path("/user/ads/delete/" + selectedId);
        };

        $scope.edit = function (selectedId) {
            $location.path("/user/ads/edit/" + selectedId);
        };

        $scope.filterByStatus = function (selectedStatus) {
            $scope.request.status = selectedStatus;
            $scope.request.startPage = 1;
            UserAdsResource.getUserAds($scope.request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])
