'use strict';

onlineExchange.controller('AdminDeleteAdsCtrl', ['$scope', '$routeParams', '$location',  'AdminAdsResource',
    'notifier', 'identity',
    function AdminDeleteAdsCtrl($scope, $routeParams, $location,  AdminAdsResource, notifier, identity) {
        $scope.adData = {};
        $scope.identity = identity;
        var selectedId = $routeParams.id;
        $scope.adData = AdminAdsResource.getAd(selectedId);

        $scope.delete = function (adDataId) {
            AdminAdsResource.delete(adDataId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/admin/ads");
                });
        };
    }
])