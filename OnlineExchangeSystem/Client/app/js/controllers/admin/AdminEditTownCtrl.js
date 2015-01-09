'use strict';

onlineExchange.controller('AdminEditTownCtrl', ['$scope', '$routeParams', '$location', 'AdminTownsResource',
    'notifier', 'identity',
    function AdminEditTownCtrl($scope, $routeParams, $location, AdminTownsResource, notifier, identity) {
        $scope.identity = identity;
        $scope.town = {
            id: $routeParams.id,
            name: $routeParams.name
        };

        $scope.edit = function () {
            AdminTownsResource.edit($scope.town, $scope.town.id)
                .$promise
                .then(function (result) {
                    notifier.success('Town edited stressful.');
                    $location.path("/admin/towns");
                });
        };
    }
])

