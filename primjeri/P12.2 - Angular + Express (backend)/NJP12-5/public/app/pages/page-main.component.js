countryApp.component('main', {

    template:`
        Dobro došli {{c.user.username}} na naš Countryapp <br/>
        <country-list></country-list>
    `,
    controller:function(AuthenticationService, $state){

        if (!AuthenticationService.isAuthenticated()) $state.go('login'); else {

            AuthenticationService.getUser().then(me =>{

                this.user=me;

            });

        }

    },
    controllerAs:'c'

});