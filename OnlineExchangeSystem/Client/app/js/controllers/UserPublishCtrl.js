'use strict';

onlineExchange.controller('UserPublishCtrl', ['$scope', '$rootScope', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function UserPublishCtrl($scope, $rootScope, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = PublicAdsResource.getAllCategories();
        $scope.towns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;

        $scope.fileSelected = function (fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.publishAd = function (adData) {
            UserAdsResource.create(adData)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement submitted for approval. Once approved, it will be published.');
                    $location.path("/user/ads");
                });
        };
    }
])
//notifyService.showError("Publish ad failed", err);