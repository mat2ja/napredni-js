countryApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.
    state('main', {
        url:'/',
        component: 'main'
    }).state('about', {
        url:'/about',
        component: 'about'
    }).state('login', {
        url:'/login',
        component: 'login'
    }).
    state('detail', {
        url:'/:countryName',
        component:'detail'
    }).
    state('admin', {
        url:'/admin',
        component:'admin'
    });

    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('interceptorService');



});