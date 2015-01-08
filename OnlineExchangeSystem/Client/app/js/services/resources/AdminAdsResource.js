'use strict';

onlineExchange.factory('AdminAdsResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var AdminAdsResource = $resource(baseServiceUrl + '/api/admin/ads' + ':activate/:id'
            , null, {
                'getAllAds': {method: 'GET', isArray: false, headers: headers},
                'getAd': {method: 'GET', params: {id: '@id'}, isArray: false, headers: headers},
                'approve': {
                    method: 'PUT',
                    params: {activate: '/approve/', id: '@id'},
                    isArray: false,
                    headers: headers
                },
                'reject': {
                    method: 'PUT',
                    params: {activate: '/reject/', id: '@id'},
                    isArray: false,
                    headers: headers
                },
                'edit': {method: 'PUT', params: {id: '@id'}, isArray: false, headers: headers},
                'delete': {method: 'DELETE', params: {id: '@id'}, isArray: false, headers: headers}
            });

        return {
            getAllAds: function (request) {
                return AdminAdsResource.getAllAds(request);
            },
            getAd: function (id) {
                return AdminAdsResource.getAd({id: id});
            },
            approve: function (id) {
                return AdminAdsResource.approve({id: id});
            },
            reject: function (id) {
                return AdminAdsResource.reject({id: id});
            },
            edit: function (id) {
                return AdminAdsResource.edit({id: id});
            },
            delete: function (id) {
                return AdminAdsResource.edit({id: id});
            }
        }
    }]);
