'use strict';

var onlineExchange = angular.module('onlineExchange', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('errorHandlerHttpInterceptor');

        var routeUserChecks = {
            authenticatedUser: {
                authenticate: function (userAccountService) {
                    return userAccountService.isAuthenticated();
                }
            },
            authenticatedAdmin: {
                authenticate: function (userAccountService) {
                    return userAccountService.isAdministrator();
                }
            }
        };

        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/user/home.html',
                controller: 'HomeCtrl'
            })
            .when('/register', {
                templateUrl: 'views/partials/user/user-register.html',
                controller: 'SignUpCtrl'
            })
            .when('/login', {
                templateUrl: 'views/partials/user/user-login.html',
                controller: 'LoginLogoutCtrl'
            })
            .when('/user/ads', {
                templateUrl: 'views/partials/user/list-user-ads.html',
                controller: 'UserAdsCtrl',
                resolve: routeUserChecks.authenticatedUser
            })
            .when('/user/ads/publish', {
                templateUrl: 'views/partials/user/user-publish-add.html',
                controller: 'UserPublishCtrl',
                resolve: routeUserChecks.authenticatedUser
            })
            .when('/user/profile', {
                templateUrl: 'views/partials/user/user-edit-profile.html',
                controller: 'EditUserProfileCtrl',
                resolve: routeUserChecks.authenticatedUser
            })
            .when('/user/ads/edit/:id', {
                templateUrl: 'views/partials/user/edit-ad.html',
                controller: 'EditAdsCtrl',
                resolve: routeUserChecks.authenticatedUser
            })
            .when('/user/ads/delete/:id', {
                templateUrl: 'views/partials/user/delete-ad.html',
                controller: 'DeleteAdsCtrl',
                resolve: routeUserChecks.authenticatedUser
            })
            .when('/admin/ads', {
                templateUrl: 'views/partials/admin/admin-home.html',
                controller: 'AdminHomeCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/ads/delete/:id', {
                templateUrl: 'views/partials/admin/delete-ad.html',
                controller: 'AdminDeleteAdsCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/ads/edit/:id', {
                templateUrl: 'views/partials/admin/edit-ad.html',
                controller: 'AdminEditAdsCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/users', {
                templateUrl: 'views/partials/admin/users.html',
                controller: 'AdminUserCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/user/edit/:id', {
                templateUrl: 'views/partials/admin/edit-profile.html',
                controller: 'AdminEditUserCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/user/delete/:id', {
                templateUrl: 'views/partials/admin/delete-profile.html',
                controller: 'AdminDeleteUserCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/categories', {
                templateUrl: 'views/partials/admin/categories.html',
                controller: 'AdminCategoriesCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/category/create', {
                templateUrl: 'views/partials/admin/create-category.html',
                controller: 'AdminCreateCategoryCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/category/delete/:id/:name', {
                templateUrl: 'views/partials/admin/delete-category.html',
                controller: 'AdminDeleteCategoryCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/category/edit/:id/:name', {
                templateUrl: 'views/partials/admin/edit-category.html',
                controller: 'AdminEditCategoryCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/towns', {
                templateUrl: 'views/partials/admin/towns.html',
                controller: 'AdminTownsCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/town/create', {
                templateUrl: 'views/partials/admin/create-town.html',
                controller: 'AdminCreateTownCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/town/delete/:id/:name', {
                templateUrl: 'views/partials/admin/delete-town.html',
                controller: 'AdminDeleteTownCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .when('/admin/town/edit/:id/:name', {
                templateUrl: 'views/partials/admin/edit-town.html',
                controller: 'AdminEditTownCtrl',
                resolve: routeUserChecks.authenticatedAdmin
            })
            .otherwise({redirectTo: '/'});
    }])
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection, userAccountService) {
            if (userAccountService.isAdministrator()) {
                $location.path('/admin/ads');
            }
            if (rejection === 'not authorized') {
                $location.path('/');
            }
        })
    })
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net')
    .constant('pageSize', 3);
// http://localhost:1337
//http:softuni-ads.azurewebsites.net