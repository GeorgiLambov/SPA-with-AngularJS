'use strict';

onlineExchange.controller('EditAdsCtrl', ['$scope', '$routeParams', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function EditAdsCtrl($scope, $routeParams, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {};
        $scope.identity = identity;
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();

        var selectedId = $routeParams.id;
        $scope.adData = UserAdsResource.getUserAd(selectedId);

        $scope.editAd = function (adData, editAdForm) {
            if (editAdForm.$valid) {
                UserAdsResource.editUserAd(adData, selectedId)
                    .$promise
                    .then(function (result) {
                        notifier.success('Advertisement edited successfully.');
                        $location.path("/user/ads");
                    });
            } else {
                notifier.error("Advertisement title and text are required!");
            }
        };
    }
])