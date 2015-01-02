'use strict';

onlineExchange.controller('UserPublishCtrl', ['$scope', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function UserPublishCtrl($scope, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;

        $scope.publishAd = function (adData, publishAdd) {
            if (publishAdd.$valid) {
                UserAdsResource.create(adData)
                    .$promise
                    .then(function (result) {
                        notifier.success('Advertisement submitted for approval. Once approved, it will be published.');
                        $location.path("/user/ads");
                    });
            } else {
                notifier.error("Publish ad failed advertisement title and text are required!");
            }
        };
    }
])