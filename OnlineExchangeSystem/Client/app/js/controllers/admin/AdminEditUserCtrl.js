'use strict';

onlineExchange.controller('AdminEditUserCtrl', ['$scope', '$location', '$routeParams', 'AdminUserResource',
    'userAccountService', 'PublicAdsResource', 'notifier', 'identity', 'pageSize',
    function AdminEditUserCtrl($scope, $location, $routeParams, AdminUserResource, userAccountService,
                               PublicAdsResource, notifier, identity, pageSize) {
        $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $scope.alltowns = PublicAdsResource.getAllTowns();
        $scope.identity = identity;
        $scope.user = $routeParams.user;
        $scope.user = {isAdmin: false};


        $scope.editUserProfile = function (user, editProfileForm) {
            if (editProfileForm.$valid) {
                AdminUserResource.editProfile(user)
                    .then(function (success) {
                        if (success) {
                            notifier.success('Edit profile successful!');
                            $scope.editProfileForm.$setPristine();
                            $location.path('/user/ads');
                        } else {
                            notifier.error('Edit profile due error!');
                        }
                    });
            } else {
                notifier.error('Name, Email, Phone are required fields!')
            }
        }

        $scope.changeUserPasswords = function (pass, changePasswordForm) {
            if (changePasswordForm.$valid) {
                userAccountService.changePassword(pass)
                    .then(function (success) {
                        if (success) {
                            notifier.success('Change passwords successful!');
                            $scope.changePasswordForm.$setPristine();
                            $location.path('/user/ads');
                        } else {
                            notifier.error('Change password due error!');
                        }
                    })
            } else {
                notifier.error('All password fields are required!')
            }
        }
    }
])
