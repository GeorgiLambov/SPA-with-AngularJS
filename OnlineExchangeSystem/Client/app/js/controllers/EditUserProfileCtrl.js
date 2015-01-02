'use strict';

onlineExchange.controller('EditUserProfileCtrl', ['$scope', 'PublicAdsResource', 'notifier', 'identity',
    function EditUserProfileCtrl($scope, PublicAdsResource, notifier, identity) {
       $scope.identity = identity;

        $scope.alltowns = PublicAdsResource.getAllTowns();



        $scope.filterByCategoryAndTown = function (request) {
            PublicAdsResource.getFilteredAds(request)
                .$promise
                .then(function (result) {
                    $scope.allAds = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])