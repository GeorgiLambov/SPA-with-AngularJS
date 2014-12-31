'use strict';

onlineExchange.factory('PublicAdsResource', ['$resource', 'baseServiceUrl',
    function ($resource, baseServiceUrl) {

        var pageUrl = '?pagesize=:pageSize&startpage=:startPage';
        var filterUrl = 'ads?townid=:townId&categoryid=:categoryId';

        var PublicAdsResource = $resource(baseServiceUrl + '/api/:id' + pageUrl
            , null, {
                'getAllAds': {
                    method: 'GET', isArray: false,
                    params: {id: 'ads', pageSize: '@pageSize', startPage: '@startPage'}
                },
                'getAllCategories': {method: 'GET', params: {id: 'categories'}, isArray: true},
                'getAllTowns': {method: 'GET', params: {id: 'towns'}, isArray: true}
            });

        var FilterResource = $resource(baseServiceUrl + '/api/' + filterUrl
            , null, {
                'getFilteredAds': {
                    method: 'GET',
                    params: {townId: '@townId', categoryId: '@categoryId'}, isArray: false
                }
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
            },
            getFilteredAds: function (filterRequest) {
                return FilterResource.getFilteredAds(filterRequest);
            }
        }
    }]);
