'use strict';

onlineExchange.factory('UserAdsResource', ['$resource', 'authorization', 'baseServiceUrl',
    function ($resource, authorization, baseServiceUrl) {

        var headers = authorization.getAuthorizationHeader();

        var UserAdsResource = $resource(baseServiceUrl + '/api/user/ads' + ':activate' + '/:id', null, {

            'getUserAds': {method: 'GET', isArray: false, headers: headers},
            'create': {method: 'POST', params: {id: '@id'}, isArray: false, headers: headers},
            'deactivateUserAd': {
                method: 'PUT', params: {activate: '/deactivate', id: '@id'},
                isArray: false, headers: headers
            },
            'publishAgainUserAd': {
                method: 'PUT', params: {activate: '/publishagain', id: '@id'},
                isArray: false, headers: headers
            },
            'getUserAd': {
                method: 'GET', params: {id: '@id'}, isArray: false, headers: headers
            },
            'editUserAd': {
                method: 'PUT', params: {id: '@id'}, isArray: false, headers: headers
            },
            'deleteUserAd': {
                method: 'DELETE', params: {id: '@id'}, isArray: false, headers: headers
            }
        });

        return {
            getUserAds: function (request) {
                return UserAdsResource.getUserAds(request);
            },
            create: function (adData) {
                return UserAdsResource.create(adData);
            },
            deactivateUserAd: function (id) {
                return UserAdsResource.deactivateUserAd({id: id}).$promise;
            },
            publishAgainUserAd: function (id) {
                return UserAdsResource.publishAgainUserAd({id: id}.$promise);
            },
            getUserAd: function (id) {
                return UserAdsResource.getUserAd({id: id}).$promise;
            },
            editUserAd: function (id) {
                return UserAdsResource.editUserAd({id: id}).$promise;
            },
            deleteUserAd: function (id) {
                return UserAdsResource.deleteUserAd({id: id}).$promise;
            }
        }
    }]);