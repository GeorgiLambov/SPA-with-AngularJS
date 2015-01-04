'use strict';

onlineExchange.controller('DeleteAdsCtrl', ['$scope', '$rootScope', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function EditAdsCtrl($scope, $rootScope, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;


        $scope.$on('deleteSelectedAdDataId', function (event, selectedId) {
            UserAdsResource.getUserAd(selectedId)
                .$promise
                .then(function (result) {
                    $scope.adData = result;
                });
        });

        $scope.delete = function (id) {
            UserAdsResource.deleteUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/");
                });
        };
    }
])