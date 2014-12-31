'use strict';

onlineExchange.controller('UserCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity', 'notifier',
    , function HomeCtrl($scope, PublicAdsResource, UserAdsResource, identity, notifier) {
        // $scope.pageRequest = {pageSize: 3, startPage: 1};
        // $scope.filterRequest = {};     HomeCTRl
        $scope.imgPattern = /^data:image///.*$/;
        $scope.identity = identity;


        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.userAds = function () {
            PublicAdsResource.getAllAds(pageRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                });
        };

        $scope.userPublishAd = function (filterRequest) {
            var prom = filterRequest;
            PublicAdsResource.getFilteredAds(filterRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])
