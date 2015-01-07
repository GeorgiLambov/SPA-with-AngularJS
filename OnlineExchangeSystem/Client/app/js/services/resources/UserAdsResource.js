'use strict';

onlineExchange.factory('UserAdsResource', ['$resource', 'authorization', 'baseServiceUrl',
    function ($resource, authorization, baseServiceUrl) {

        var headers = authorization.getAuthorizationHeader();

        var UserAdsResource = $resource(baseServiceUrl + '/api/user/ads' + ':activate/:id',
            null, {
                'getUserAds': {method: 'GET', isArray: false, headers: headers},
                'create': {method: 'POST', isArray: false, headers: headers},
                'deactivateUserAd': {
                    method: 'PUT', params: {activate: '/deactivate/', id: '@id'},
                    isArray: false, headers: headers
                },
                'publishAgainUserAd': {
                    method: 'PUT', params: {activate: '/publishagain/', id: '@id'},
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
                return UserAdsResource.deactivateUserAd({id: id});
            },
            publishAgainUserAd: function (id) {
                return UserAdsResource.publishAgainUserAd({id: id});
            },
            getUserAd: function (id) {
                return UserAdsResource.getUserAd({id: id});
            },
            editUserAd: function (adData, selectedId) {
                return UserAdsResource.editUserAd(adData);
            },
            deleteUserAd: function (id) {
                return UserAdsResource.deleteUserAd({id: id});
            }
        }
    }]);