'use strict';

onlineExchange.controller('HomeCtrl', ['$scope', 'AdsResource',
    function HomeCtrl($scope, AdsResource) {
        $scope.ads = AdsResource.getAll();
    }]);