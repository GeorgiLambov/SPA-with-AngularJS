'use strict';

onlineExchange.controller('AdminDeleteTownCtrl', ['$scope', '$routeParams', '$location', 'AdminTownsResource',
    'notifier', 'identity',
    function AdminDeleteTownCtrl($scope, $routeParams, $location, AdminTownsResource, notifier, identity) {
        $scope.identity = identity;
        $scope.selectedId = $routeParams.id;
        $scope.townName = $routeParams.name;

        $scope.delete = function () {
            AdminTownsResource.delete($scope.selectedId)
                .$promise
                .then(function (result) {
                    notifier.success('Advertisement deleted stressful.');
                    $location.path("/admin/towns");
                });
        };
    }
])
