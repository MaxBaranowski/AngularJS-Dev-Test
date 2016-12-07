"use strict"

app.controller('mainCtrl', function($scope, $rootScope, $http, $location, $uibModal) {

    $http.get("http://jsonplaceholder.typicode.com/users")
        .success(function(data) {
            $scope.data = data;
        })

})

app.controller('modalCtrl', function($http, $scope, $rootScope, $uibModal, $location) {

    var $ctrl = this;
    $ctrl.items;

    $http.get("http://jsonplaceholder.typicode.com/users")
        .success(function(data) {
            $scope.data = data;

            // declare functions
            $ctrl.add = function(person) {
                $ctrl.items = person;
                $location.url('/detail/?' + person.id)
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


            var adr = $location.path();
            adr = adr.slice(8);

            var temp;
            for (let i = 0; i < data.length; i++) {
                for (let key in data[i]) {
                    if (data[i].id == adr) {
                        temp = data[i];
                    }
                }
            }

            if (adr > 0) {
                $ctrl.items = temp;
                $ctrl.open();
            }



        })
});

app.controller('ModalInstanceCtrl', function($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
});
