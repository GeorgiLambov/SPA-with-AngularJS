'use strict';

onlineExchange.factory('AdminUserResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var AdminUserResource = $resource(baseServiceUrl + '/api/admin/user' + ':fix/:id'
            , null, {
                'getAll': {method: 'GET', params: {fix: 's'}, isArray: false, headers: headers},
                'edit': {method: 'PUT', params: {id: '@userName'}, isArray: false, headers: headers},
                'delete': {method: 'DELETE', params: {id: '@userName'}, isArray: false, headers: headers},
                'get': {method: 'GET', params: {fix: 's', id: '@id'}, isArray: false, headers: headers}
            });

        return {
            getAllUsers: function (request) {
                return AdminUserResource.getAll(request);
            },
            editUser: function (user, userName) {
                return AdminUserResource.edit(user);
            },
            deleteUser: function (user, userName) {
                return AdminUserResource.delete(user);
            },
            getUser: function (id) {
                return AdminUserResource.get({id: id});
            }
        }
    }]);

