/**
 * Created by Administrator on 2017/3/2.
 */
;(function (angular) {
    angular.module('app')
        .controller('PhoneListController',['$scope','$http',function ($scope, $http) {
            $scope.data=[]
            $http.get('/data/phones.json')
                .then(function (data) {
                    $scope.data=data.data
                })
        }])
})(window.angular)
