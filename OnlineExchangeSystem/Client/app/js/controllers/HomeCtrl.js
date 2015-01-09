'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'notifier', 'identity', 'pageSize',
    function HomeCtrl($scope, PublicAdsResource, notifier, identity, pageSize) {
        $scope.request = {pageSize: pageSize, startPage: 1, townId: '', categoryId: ''};
        $scope.identity = identity;

        $scope.AllData = PublicAdsResource.getAllAds($scope.request);
        $scope.allCategory = PublicAdsResource.getAllCategories();
        $scope.alltowns = PublicAdsResource.getAllTowns();

        $scope.pageFilter = function (request) {
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                });
        };

        $scope.filterByCategoryAndTown = function (request) {
            request.startPage = 1;
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.AllData = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])