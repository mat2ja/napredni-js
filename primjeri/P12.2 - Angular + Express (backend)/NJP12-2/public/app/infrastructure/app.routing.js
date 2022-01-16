countryApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('main', {
        url:'/',
        component: 'main'
    }).state('about', {
        url:'/about',
        component: 'about'
    }).
    state('detail', {
        url:'/:countryName',
        component:'detail'
    });

    $urlRouterProvider.otherwise('/');


});