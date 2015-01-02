'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'notifier', 'identity',
    function HomeCtrl($scope, PublicAdsResource, notifier, identity) {
        $scope.request = {pageSize: 3, startPage: 1, townId: '', categoryId: ''};
        $scope.identity = identity;

        $scope.allAds = PublicAdsResource.getAllAds($scope.request);
        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.pageFilter = function (request) {
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.filterByCategoryAndTown = function (request) {
            PublicAdsResource.getFilteredAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])