'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'notifier',
    function HomeCtrl($scope, PublicAdsResource, notifier) {
        $scope.pageRequest = {pageSize: 3, startPage: 1};
        $scope.filterRequest = {};

        $scope.allAds = PublicAdsResource.getAllAds($scope.pageRequest);
        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.pageFilter = function (pageRequest) {
            PublicAdsResource.getAllAds(pageRequest)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                });
        };

        $scope.filterByCategoryAndTown = function (filterRequest) {
            var prom = filterRequest;
            PublicAdsResource.getFilteredAds(filterRequest)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])