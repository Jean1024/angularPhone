/**
 * Created by Administrator on 2017/3/2.
 */
;(function (angular) {
    angular.module('app')
        .controller('PhoneDetailController',
            ['$scope',
            '$http',
            '$routeParams',
            function ($scope,$http,$routeParams) {
                $scope.phone=[]
                $http.get('/data/'+$routeParams.id)
                    .then(function (data) {
                        $scope.phone=data.data
                    })
            }
        ])
})(window.angular)
