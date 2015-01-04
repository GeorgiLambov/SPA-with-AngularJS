'use strict';

onlineExchange.controller('UserAdsCtrl', ['$scope', '$rootScope', '$location', 'PublicAdsResource', 'UserAdsResource', 'identity', 'notifier',
    function UserAdsCtrl($scope, $rootScope, $location, PublicAdsResource, UserAdsResource, identity, notifier) {
        $scope.request = {pageSize: 3, startPage: 1};
        $scope.identity = identity;

        //$scope.allCategory = PublicAdsResource.getAllCategories();
        // $scope.alltowns = PublicAdsResource.getAllTowns();

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
            $location.path("/user/ads/delete");
            $rootScope.$broadcast('deleteSelectedAdDataId', selectedId);


        };

        $scope.edit = function (selectedId) {
            $rootScope.$broadcast('editSelectedAdDataId', selectedId);
            $location.path("/user/ads/edit");
        };
    }
])
