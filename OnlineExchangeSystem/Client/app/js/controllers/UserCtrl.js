'use strict';

onlineExchange.controller('UserCtrl', ['$scope', 'PublicAdsResource', 'UserAdsResource', 'identity', 'notifier',
    'FileUploader', function HomeCtrl($scope, PublicAdsResource, UserAdsResource, identity, notifier, FileUploader) {
        // $scope.pageRequest = {pageSize: 3, startPage: 1};
        // $scope.filterRequest = {};     HomeCTRl
        $scope.imgPattern = /^data:image///.*$/;
        $scope.identity = identity;
        $scope.uploader = new FileUploader();


        $scope.userAds = function () {
            PublicAdsResource.getAllAds(pageRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                });
        };

        $scope.userPublishAd = function (filterRequest) {
            var prom = filterRequest;
            PublicAdsResource.getFilteredAds(filterRequest)
                .$promise
                .then(function (result) {
                    $scope.result = result;
                    notifier.success('Filtered successful!');
                });
        };
    }
])
