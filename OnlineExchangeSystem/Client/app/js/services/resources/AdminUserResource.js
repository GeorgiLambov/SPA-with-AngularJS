'use strict';

onlineExchange.factory('AdminUserResource', ['$resource', 'baseServiceUrl', 'authorization',
    function ($resource, baseServiceUrl, authorization) {

        var headers = authorization.getAuthorizationHeader();

        var AdminUserResource = $resource(baseServiceUrl + '/api/admin/User/probata' + ':activate/:id'
            , null, {
                'getAll': {method: 'GET', params: {id: 's'}, isArray: false, headers: headers},
                'editProfile': {method: 'PUT', isArray: false, headers: headers}

            });

        return {
            getAllUsers: function (request) {
                return AdminUserResource.getAll(request);
            },
            editProfile: function (user) {
                return AdminUserResource.editProfile(user);
            }
        }
    }]);

