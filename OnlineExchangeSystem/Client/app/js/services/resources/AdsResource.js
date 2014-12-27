'use strict';

onlineExchange.factory('AdsResource', ['$resource', 'authorization', 'baseServiceUrl',
    function ($resource, authorization, baseServiceUrl) {

        var headers = authorization.getAuthorizationHeader();

        var AdsResource = $resource(baseServiceUrl + '/api/:user/' + 'ads' + ':activate/:id', null, {
            'getAll': {
                method: 'GET',
                isArray: true,
                transformResponse: function (data, headers) {
                    return JSON.parse(data).ads;
                }
            },
            'create': {method: 'POST', params: {user: '@user'}, isArray: false, headers: headers},
            'getUserAds': {method: 'GET', params: {user: '@user'}, isArray: false, headers: headers},
            'deactivateUserAd': {
                method: 'PUT', params: {user: '@user', activate: '@/deactivate', id: '@id'},
                isArray: false, headers: headers
            },
            'publishAgainUserAd': {
                method: 'PUT', params: {user: '@user', activate: '@/publishagain', id: '@id'},
                isArray: false, headers: headers
            },
            'getUserAd': {
                method: 'GET', params: {user: '@user', id: '@/id'}, isArray: false, headers: headers
            },
            'editUserAd': {
                method: 'PUT', params: {user: '@user', id: '@/id'}, isArray: false, headers: headers
            },
            'deleteUserAd': {
                method: 'DELETE', params: {user: '@user', id: '@/id'}, isArray: false, headers: headers
            }
        });

        return {
            getAll: function () {
                return AdsResource.getAll();
            },
            create: function (ads) {
                return AdsResource.create(ads).$promise;
            },
            getUserAds: function (request) {
                return AdsResource.getUserAds(request);
            },
            deactivateUserAd: function (id) {
                return AdsResource.deactivateUserAd({id: id}).$promise;
            },
            publishAgainUserAd: function (id) {
                return AdsResource.publishAgainUserAd({id: id}.$promise);
            },
            getUserAd: function (id) {
                return AdsResource.getUserAd({id: id}).$promise;
            },
            editUserAd: function (id) {
                return AdsResource.editUserAd({id: id}).$promise;
            },
            deleteUserAd: function (id) {
                return AdsResource.deleteUserAd({id: id}).$promise;
            },
            getAllWithPaging: function (pagesize, startpage) {
                return AdsResource.getAllWithPaging();
                //todo
            }
        }
    }]);