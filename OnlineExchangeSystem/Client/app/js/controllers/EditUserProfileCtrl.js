'use strict';

onlineExchange.controller('EditUserProfileCtrl', ['$scope', 'userAccountService', 'PublicAdsResource', 'notifier', 'identity',
    function EditUserProfileCtrl($scope, userAccountService, PublicAdsResource, notifier, identity) {
        $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $scope.alltowns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;
        $scope.user = {};
        //$scope.userData = userAccountService.userInfo();

        $scope.userData = (function () {
            userAccountService.userInfo()
                .then(function (responce) {
                    $scope.currentUser = responce;
                });
        }());


        $scope.editUserProfile = function (user, editProfile) {
            if (editProfile.$valid) {
                userAccountService.editUserProfile(user)
                    .then(function (success) {
                        if (success) {
                            notifier.success('Edit profile successful!');
                            // $location.path('/'); moje da ne se promenia
                        } else {
                            notifier.error('Edit profile due error!');
                        }
                    });
            } else {
                notifier.error('Name, Email, Phone are required fields!')
            }
        }

    }
])