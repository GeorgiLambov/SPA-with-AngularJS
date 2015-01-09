'use strict';

onlineExchange.factory('AdminTownsResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var TownsResource = $resource(baseServiceUrl + '/api/admin/towns/:id'
            , null, {
                'getAll': {method: 'GET', isArray: false, headers: headers},
                'create': {method: 'POST', headers: headers, isArray: false},
                'edit': {method: 'PUT', params: {id: '@id'}, isArray: false, headers: headers},
                'delete': {method: 'DELETE', params: {id: '@id'}, isArray: false, headers: headers}
            });

        return {
            getAll: function (request) {
                return TownsResource.getAll(request);
            },
            create: function (town) {
                return TownsResource.create(town);
            },
            edit: function (town, selectedId) {
                return TownsResource.edit(town);
            },
            delete: function (id) {
                return TownsResource.delete({id: id});
            }
        }
    }]);
