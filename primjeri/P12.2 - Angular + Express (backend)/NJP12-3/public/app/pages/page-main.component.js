countryApp.component('main', {

    template:`
        Dobro došli na naš Countryapp <br/>
        <country-list></country-list>
    `,
    controller:function(AuthenticationService, $state){

        if (!AuthenticationService.isAuthenticated()) $state.go('login'); else {

            this.user=AuthenticationService.getUser();

        }

    },
    controllerAs:'c'

});