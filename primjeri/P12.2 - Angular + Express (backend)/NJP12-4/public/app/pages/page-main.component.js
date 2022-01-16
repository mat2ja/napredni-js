countryApp.component('main', {

    template:`
        Dobro došli {{c.user.username}} na naš Countryapp <br/>
        <country-list></country-list>
    `,
    controller:function(AuthenticationService, $state){

        if (!AuthenticationService.isAuthenticated()) $state.go('login'); else {

            this.user=AuthenticationService.getUser();
            if (!this.user) AuthenticationService.whoAmI().then(me =>{

                this.user=me;

            });

        }

    },
    controllerAs:'c'

});