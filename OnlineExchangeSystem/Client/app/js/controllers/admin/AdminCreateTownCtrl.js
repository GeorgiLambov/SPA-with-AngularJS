'use strict';

onlineExchange.controller('AdminCreateTownCtrl', ['$scope', '$routeParams', '$location', 'AdminTownsResource',
    'notifier', 'identity',
    function AdminCreateTownCtrl($scope, $routeParams, $location, AdminTownsResource, notifier, identity) {
        $scope.identity = identity;
        $scope.town = {
            name: $routeParams.name
        };

        $scope.create = function () {
            AdminTownsResource.create($scope.town, $scope.town.id)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement edited stressful.');
                    $location.path("/admin/towns");
                });
        };
    }
])

