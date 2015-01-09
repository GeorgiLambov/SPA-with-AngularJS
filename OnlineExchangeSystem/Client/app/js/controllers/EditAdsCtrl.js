'use strict';

onlineExchange.controller('EditAdsCtrl', ['$scope', '$routeParams', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function EditAdsCtrl($scope, $routeParams, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.identity = identity;
        $scope.adData = {changeImage: false};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();

        var selectedId = $routeParams.id;
        $scope.adData = UserAdsResource.getUserAd(selectedId);

        $scope.changeImage = function () {
            $scope.adData.imageDataUrl = '';
            $scope.adData.changeImage = true;
        }
        $scope.deleteImage = function () {
            $scope.adData.changeImage = true;
            delete  $scope.adData.imageDataUrl;
        }


        $scope.editAd = function (adData, editAdForm) {
            if (editAdForm.$valid) {
                UserAdsResource.editUserAd(adData, selectedId)
                    .$promise
                    .then(function () {
                        notifier.success('Advertisement edited successfully.');
                        $location.path("/user/ads");
                    });
            } else {
                notifier.error("Advertisement title and text are required!");
            }
        };
    }
])