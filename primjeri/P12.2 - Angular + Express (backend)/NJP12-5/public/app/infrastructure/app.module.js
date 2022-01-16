var countryApp = angular.module('app', ['ui.router']).run(function($transitions, AuthenticationService){

    $transitions.onStart({}, function(transition) {

        console.log(transition);
        console.log(transition.to());
        console.log(transition.from());


      if (transition.to().component=='admin'){

            return new Promise((resolve, reject) => {

                AuthenticationService.getUser()
                    .then(user => {

                        console.log(user.level);
                        if (user.level!=1) reject(); else resolve();

                    });


            });

        }

    });

});

//https://ui-router.github.io/guide/transitionhooks