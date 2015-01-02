'use strict';

onlineExchange.controller('UserAdsCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity', 'notifier',
    function UserAdsCtrl($scope, PublicAdsResource, UserAdsResource, identity, notifier) {
        $scope.request = {pageSize: 3, startPage: 2};
        $scope.identity = identity;

        //$scope.allCategory = PublicAdsResource.getAllCategories();
        // $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.userAds = UserAdsResource.getUserAds($scope.request);


        $scope.pageFilter = function (request) {  //to do
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.deactivateAd = function (adDataId) {
            UserAdsResource.deactivateUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deactivate.');
                    $location.path("/user/ads");
                });
        };
        $scope.publishAgain = function (adDataId) {
            UserAdsResource.publishAgainUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement submitted for publish again. Once approved, it will be published.');
                    $location.path("/user/ads");
                });
        };

        $scope.deleteAd = function (adDataId) {
            UserAdsResource.deleteUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/user/ads");
                });
        };

        $scope.edit = function (adDataId) {
            $location.path("#/user/ads/edit"); //to do

        };

    }
])
