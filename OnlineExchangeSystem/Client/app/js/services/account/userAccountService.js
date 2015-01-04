'use strict';

onlineExchange.factory('userAccountService', ['$http', '$q', 'identity', 'authorization', 'errorHandler', 'baseServiceUrl',
    function ($http, $q, identity, authorization, errorHandler, baseServiceUrl) {
        var usersApi = baseServiceUrl + '/api/user';

        return {
            signup: function (user) {
                var deferred = $q.defer();
                $http.post(usersApi + '/register', user)
                    .success(function (response) {
                        if (response['access_token']) {
                            identity.setCurrentUser(response);
                            authorization.setAuthorizationHeader(response['access_token']);
                            deferred.resolve(true);
                        }
                        else {
                            deferred.resolve(false);
                        }
                    })
                    .error(errorHandler.processError);

                return deferred.promise;
            },
            login: function (user) {
                var deferred = $q.defer();
                $http.post(usersApi + '/login', 'username=' + user.username + '&password=' +
                    user.password,
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .success(function (response) {
                        if (response['access_token']) {
                            identity.setCurrentUser(response);
                            authorization.setAuthorizationHeader(response['access_token']);
                            deferred.resolve(true);
                        }
                        else {
                            deferred.resolve(false);
                        }
                    });

                return deferred.promise;
            },
            logout: function () {
                var deferred = $q.defer();

                var headers = authorization.getAuthorizationHeader();
                $http.post(usersApi + '/logout', {}, {headers: headers})
                    .success(function () {
                        identity.setCurrentUser(undefined);
                        authorization.removeAuthorizationHeader();
                        deferred.resolve();
                    });

                return deferred.promise;
            },
            userInfo: function () {
                var deferred = $q.defer();

                var userInfo = identity.getCurrentUser().userInfo;
                if (userInfo) {
                    deferred.resolve(userInfo);
                }
                else {
                    var headers = authorization.getAuthorizationHeader();
                    $http.get(usersApi + '/profile', {headers: headers})
                        .success(function (response) {
                            var currentUser = identity.getCurrentUser();
                            angular.extend(currentUser, {userInfo: response});
                            identity.setCurrentUser(currentUser);
                            deferred.resolve(response);
                        })
                        .error(errorHandler.processError);
                }

                return deferred.promise;
            },
            editUserProfile: function (user) {
                var deferred = $q.defer();

                var headers = authorization.getAuthorizationHeader();
                $http.put(usersApi + '/profile', user, {headers: headers})
                    .success(function (response) {
                        deferred.resolve(response);
                    })
                    .error(errorHandler.processError);

                return deferred.promise;
            },
            isAuthenticated: function () {
                if (identity.isAuthenticated()) {
                    return true;
                }
                else {
                    return $q.reject('not authorized');
                }
            }
        }
    }]);