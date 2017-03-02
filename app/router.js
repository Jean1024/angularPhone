/**
 * Created by Administrator on 2017/3/2.
 */
;(function (angular) {
    angular.module('app')
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/',{
                    templateUrl:'/app/phone-list/phone-list.html',
                    controller:'PhoneListController'
                })
                .when('/detail/:id',{
                    templateUrl:'/app/phone-detail/detail.html',
                    controller:'PhoneDetailController'
                })
        }])
})(window.angular)
