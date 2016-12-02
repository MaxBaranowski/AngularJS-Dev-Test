"use strict"

app.controller('mainCtrl', function($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/users")
        .success(function(data) {
            $scope.data = data;
        })
})

app.controller('modalCtrl', function($scope, $uibModal, $log, $document, $cookies) {

    $(document).ready(function() {
        let check = $cookies.get('cookie');
        if (check !== undefined) {
            $ctrl.items = JSON.parse($cookies.get('cookie'));
            $ctrl.open();
            //cookie will live 5s
            setTimeout(function() {
                $cookies.remove('cookie');
            }, 5000);
        }
    });

    // // Retrieving a cookie
    // $cookies.get('cookie');
    // // Setting a cookie
    // $cookies.put('cookie', 'oatmeal');

    var $ctrl = this;
    $ctrl.items;
    $ctrl.add = function(person) {
        $cookies.put('cookie', JSON.stringify(person));
        $ctrl.items = JSON.parse($cookies.get('cookie'));
        $ctrl.open();
    }

    //play animation when modal window appears
    $ctrl.animationsEnabled = true;

    $ctrl.open = function(size, parentSelector) {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,

            templateUrl: './template/detail-view.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',

            resolve: {
                items: function() {
                    return $ctrl.items;
                }
            }
        });
    }
});


app.controller('ModalInstanceCtrl', function($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
});
