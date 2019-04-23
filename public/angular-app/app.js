var Baad = angular.module('baadwebapi',['ngRoute']);

Baad.config(config);

function config($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'angular-app/trekking/trekking-hiscore/trekkingHiscore.html',
            controller: TrekkingHiscoreController,
            controllerAs:'vm',
        })
        .when('/trekking',{
            templateUrl:'angular-app/trekking/trekking-hiscore/trekkingHiscore.html',
            controller: TrekkingHiscoreController,
            controllerAs:'vm'
        })
        .when('/trekking/:id',{
            templateUrl:'angular-app/trekking/trek-user/trekUser.html',
            controller: TrekUserController,
            controllerAs:'vm'
        });
        // .otherwise({
        //     redirectTo: "/"
        // });
}
