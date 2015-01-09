'use strict';

onlineExchange.factory('AdminCategoriesResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var CategoriesResource = $resource(baseServiceUrl + '/api/admin/categories/:id'
            , null, {
                'getAll': {method: 'GET', isArray: false, headers: headers},
                'create': {method: 'POST', headers: headers, isArray: false},
                'edit': {method: 'PUT', params: {id: '@id'}, isArray: false, headers: headers},
                'delete': {method: 'DELETE', params: {id: '@id'}, isArray: false, headers: headers}
            });

        return {
            getAll: function (request) {
                return CategoriesResource.getAll(request);
            },
            create: function (category) {
                return CategoriesResource.create(category);
            },
            edit: function (category, selectedId) {
                return CategoriesResource.edit(category);
            },
            delete: function (id) {
                return CategoriesResource.delete({id: id});
            }
        }
    }]);