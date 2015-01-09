'use strict';

onlineExchange.factory('AdminUserResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var AdminUserResource = $resource(baseServiceUrl + '/api/admin/users' + ':activate/:id'
            , null, {
                'getAll': {method: 'GET', isArray: false, headers: headers},
                'edit': {method: 'PUT', isArray: false, headers: headers},
                'delete': {method: 'PUT', isArray: false, headers: headers}
            });

        return {
            getAllUsers: function (request) {
                return AdminUserResource.getAll(request);
            },
            editUser: function (user) {
                return AdminUserResource.edit(user);
            },
            deleteUser: function (user) {
                return AdminUserResource.delete(user);
            }
        }
    }]);

