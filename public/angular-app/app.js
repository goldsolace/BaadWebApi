var Baad = angular.module('baadwebapi',['ngRoute']);

Baad.config(config);

function config($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'angular-app/landing/landing.html',
            controller: LandingController,
            controllerAs:'vm',
        })

        // Trekking
        .when('/trekking',{
            templateUrl:'angular-app/trekking/trekking-hiscore/trekkingHiscore.html',
            controller: TrekkingHiscoreController,
            controllerAs:'vm'
        })
        .when('/trekking/:id',{
            templateUrl:'angular-app/trekking/trek-user/trekUser.html',
            controller: TrekUserController,
            controllerAs:'vm'
        })
        
        // Herblore
        .when('/herblore',{
            templateUrl:'angular-app/herblore/herblore-hiscore/herbloreHiscore.html',
            controller: HerbloreHiscoreController,
            controllerAs:'vm'
        })
        .when('/herblore/:id',{
            templateUrl:'angular-app/herblore/herblore-user/herbloreUser.html',
            controller: HerbloreUserController,
            controllerAs:'vm'
        });
/*
        // ChaoticPrayer
        .when('/chaoticprayer',{
            templateUrl:'angular-app/chaoticprayer/chaoticprayer-hiscore/chaoticprayerHiscore.html',
            controller: ChaoticPrayerHiscoreController,
            controllerAs:'vm'
        })
        .when('/chaoticprayer/:id',{
            templateUrl:'angular-app/chaoticprayer/chaoticprayer-user/chaoticprayerUser.html',
            controller: ChaoticPrayerUserController,
            controllerAs:'vm'
        })

        // Agility
        .when('/agility',{
            templateUrl:'angular-app/agility/agility-hiscore/agilityHiscore.html',
            controller: AgilityHiscoreController,
            controllerAs:'vm'
        })
        .when('/agility/:id',{
            templateUrl:'angular-app/agility/agility-user/agilityUser.html',
            controller: AgilityUserController,
            controllerAs:'vm'
        })
*/

/*
        // Arceuus Tabs
        .when('/arceuustabs',{
            templateUrl:'angular-app/arceuustabs/arceuustabs-hiscore/arceuustabsHiscore.html',
            controller: ArceuusTabsHiscoreController,
            controllerAs:'vm'
        })
        .when('/arceuustabs/:id',{
            templateUrl:'angular-app/arceuustabs/arceuustabs-user/arceuustabsUser.html',
            controller: ArceuusTabsUserController,
            controllerAs:'vm'
        })

        // Arceuus Library
        .when('/arceuuslibrary',{
            templateUrl:'angular-app/arceuuslibrary/arceuuslibrary-hiscore/arceuuslibraryHiscore.html',
            controller: ArceuusLibraryHiscoreController,
            controllerAs:'vm'
        })
        .when('/arceuuslibrary/:id',{
            templateUrl:'angular-app/arceuuslibrary/arceuuslibrary-user/arceuuslibraryUser.html',
            controller: ArceuusLibraryUserController,
            controllerAs:'vm'
        })

        // Tithe
        .when('/tithe',{
            templateUrl:'angular-app/tithe/tithe-hiscore/titheHiscore.html',
            controller: TitheHiscoreController,
            controllerAs:'vm'
        })
        .when('/tithe/:id',{
            templateUrl:'angular-app/tithe/tithe-user/titheUser.html',
            controller: TitheUserController,
            controllerAs:'vm'
        });
*/
        // .otherwise({
        //     redirectTo: "/"
        // });
}
