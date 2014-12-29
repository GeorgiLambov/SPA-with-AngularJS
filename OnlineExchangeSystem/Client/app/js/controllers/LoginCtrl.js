'use strict';

onlineExchange.controller('LoginCtrl', ['$scope', '$location', 'notifier', 'identity', 'userAccountService',
    function ($scope, $location, notifier, identity, userAccountService) {
        $scope.identity = identity;

        $scope.login = function (user, loginForm) {
            if (loginForm.$valid) {
                userAccountService.login(user).then(function (success) {
                    if (success) {
                        notifier.success('Successful login!');
                        $location.path('/');
                    }
                    else {
                        notifier.error('Username/Password combination is not valid!');
                    }
                });
            }
            else {
                notifier.error('Username and password are required fields!')
            }
        }

        $scope.logout = function () {
            auth.logout().then(function () {
                notifier.success('Successful logout!');
                if ($scope.user) {
                    $scope.user.email = '';
                    $scope.user.username = '';
                    $scope.user.password = '';
                }

                $scope.loginForm.$setPristine();
                $location.path('/');
            })
        }
    }])