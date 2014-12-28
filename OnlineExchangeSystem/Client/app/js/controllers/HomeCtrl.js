'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity',
    function HomeCtrl($scope, PublicAdsResource, UserAdsResource, identity) {
        $scope.request = {pageSize: 5, startPage: 1};
        $scope.identity = identity;

        $scope.filter = function (request) {
            PublicAdsResource.getAllAds(request)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                });
        };

        $scope.result = PublicAdsResource.getAllAds($scope.request);

    }
])

// $scope.category = PublicAdsResource.getAllCategories();
//  $scope.towns = PublicAdsResource.getAllTowns();