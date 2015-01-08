'use strict';

onlineExchange.controller('AdminEditAdsCtrl', ['$scope', '$routeParams', '$location', 'PublicAdsResource', 'AdminAdsResource',
    'notifier', 'identity',
    function AdminEditAdsCtrl($scope, $routeParams, $location, PublicAdsResource, AdminAdsResource, notifier, identity) {
        $scope.identity = identity;
        $scope.adData = {changeImage: false};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();

        var selectedId = $routeParams.id;
        $scope.adData = AdminAdsResource.getAd(selectedId);

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
                AdminAdsResource.edit(adData, selectedId)
                    .$promise
                    .then(function (result) {
                        notifier.success('Advertisement edited successfully.');
                        $location.path("/admin/ads");
                    });
            } else {
                notifier.error("Advertisement title and text are required!");
            }
        };
    }
])