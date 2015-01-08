'use strict';

onlineExchange.controller('DeleteAdsCtrl', ['$scope', '$routeParams', '$location', 'PublicAdsResource', 'UserAdsResource',
    'notifier', 'identity',
    function DeleteAdsCtrl($scope, $routeParams, $location, PublicAdsResource, UserAdsResource, notifier, identity) {
        $scope.adData = {};
        $scope.identity = identity;
        var selectedId = $routeParams.id;
        $scope.adData = UserAdsResource.getUserAd(selectedId);

        $scope.delete = function (adDataId) {
            UserAdsResource.deleteUserAd(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/user/ads");
                });
        };
    }
])