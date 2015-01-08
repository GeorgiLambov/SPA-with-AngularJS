'use strict';

onlineExchange.factory('PublicAdsResource', ['$resource', 'baseServiceUrl',
    function ($resource, baseServiceUrl) {

        var PublicAdsResource = $resource(baseServiceUrl + '/api/:id'
            , null, {
                'getAllAds': {method: 'GET', isArray: false, params: {id: 'ads'}},
                'getAllCategories': {method: 'GET', params: {id: 'categories'}, isArray: true},
                'getAllTowns': {method: 'GET', params: {id: 'towns'}, isArray: true}
            });

        return {
            getAllAds: function (request) {
                return PublicAdsResource.getAllAds(request);
            },
            getAllCategories: function () {
                return PublicAdsResource.getAllCategories();
            },
            getAllTowns: function () {
                return PublicAdsResource.getAllTowns();
            }
        }
    }]);
