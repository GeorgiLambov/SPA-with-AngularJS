'use strict';

onlineExchange.controller('SignUpCtrl', ['$scope', '$location', 'userAccountService', 'notifier',
    function ($scope, $location, userAccountService, notifier) {
        $scope.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        $scope.register = function (user, signUpForm) {
            if (signUpForm.$valid) {
                userAccountService.signup(user).then(function () {
                    notifier.success('Registration successful! Please Login!');
                    $location.path('/login');
                })
            } else {
                notifier.error('Username, Password, Full Name, Email and ConfirmPassword are required fields!')
            }
        }
    }]);