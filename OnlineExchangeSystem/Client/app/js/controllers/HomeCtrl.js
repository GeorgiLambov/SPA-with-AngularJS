'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity', 'notifier',
    function HomeCtrl($scope, PublicAdsResource, UserAdsResource, identity) {
        $scope.pageRequest = {pageSize: 3, startPage: 1};
        $scope.identity = identity;  //todo
        $scope.filterRequest = {};

        $scope.result = PublicAdsResource.getAllAds($scope.pageRequest);
        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.pageFilter = function (pageRequest) {
            PublicAdsResource.getAllAds(pageRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                });
        };

        $scope.filterByCategoryAndTown = function (filterRequest) {
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