'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity',
    function HomeCtrl($scope, PublicAdsResource, UserAdsResource, identity) {
        $scope.pageRequest = {pageSize: 3, startPage: 1};
        $scope.identity = identity;  //todo

        $scope.result = PublicAdsResource.getAllAds($scope.pageRequest);

        $scope.pageFilter = function (pageRequest) {
            PublicAdsResource.getAllAds(pageRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                });
        };

        $scope.categoryRequest = function () {
            PublicAdsResource.getAllCategories()
                .$promise
                .then(function (result) {
                    $scope.allCategory = result;
                });
        };

        $scope.townRequest = function () {
            PublicAdsResource.getAllTowns()
                .$promise
                .then(function (result) {
                    $scope.allTown = result;
                });
        };
    }
])