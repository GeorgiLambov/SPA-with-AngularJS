'use strict';

onlineExchange.controller('EditAdsCtrl', ['$scope', '$rootScope', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function EditAdsCtrl($scope, $rootScope, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;


        $rootScope.$on('editSelectedAdDataId', function (event, selectedId) {
            UserAdsResource.getUserAd(selectedId)
                .$promise
                .then(function (result) {
                    $scope.adData = result;

                });
        });

        $scope.editAd = function (adData, editAdForm) {
            if (editAdForm.$valid) {
                UserAdsResource.editUserAd(adData)
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