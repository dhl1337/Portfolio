(function () {
    'use strict';
    angular
        .module('portfolioApp')
        .config(['$stateProvider','$urlRouterProvider',config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '../app/components/about/aboutView.html',
                controller: 'aboutController',
                controllerAs: 'about'
            })
            .state('work', {
                url: '/work',
                templateUrl: '../app/components/work/workView.html',
                controller: 'workController',
                controllerAs: 'work'
            });
        $urlRouterProvider.otherwise('/work');
    }
})();