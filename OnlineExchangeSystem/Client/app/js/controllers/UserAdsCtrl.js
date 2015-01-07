'use strict';

onlineExchange.controller('UserAdsCtrl', ['$scope', '$location', 'UserAdsResource', 'identity', 'notifier', 'pageSize',
    function UserAdsCtrl($scope, $location, UserAdsResource, identity, notifier, pageSize) {
        $scope.request = {pageSize: pageSize, startPage: 1};
        $scope.identity = identity;

        $scope.allAds = UserAdsResource.getUserAds($scope.request);

        $scope.pageFilter = function (request) {
            UserAdsResource.getUserAds($scope.request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.deactivate = function (adDataId) {
            UserAdsResource.deactivateUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement is now deactivate.');
                    $location.path("/");
                });
        };
        $scope.publishAgain = function (adDataId) {
            UserAdsResource.publishAgainUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement submitted for publish again. Once approved, it will be published.');
                    $location.path("/");
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
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])
