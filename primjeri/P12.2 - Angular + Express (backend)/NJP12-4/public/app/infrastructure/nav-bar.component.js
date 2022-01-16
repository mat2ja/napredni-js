countryApp.component('navBar', {
    template:`
        <div class="navbar navbar-default">
            <ul class="nav nav-pills">
              <li role="presentation" ng-class="c.getClass('main')"><a ui-sref="main">Home</a></li>
              <li role="presentation" ng-class="c.getClass('about')"><a ui-sref="about">About</a></li>            
              <li class="pull-right" role="presentation"><a ng-show="c.authenticated" ng-click="c.logout()">Logout</a></li>            
            </ul>
       </div>      
   `,
    controller:function($state, AuthenticationService){

        this.getClass=function(c){
            if ($state.current.name==c) return 'active';

        };

        this.user=AuthenticationService.getUser();
        this.authenticated=AuthenticationService.isAuthenticated();

        console.log(this.user);
        this.$doCheck=function(){

            this.user=AuthenticationService.getUser();
            this.authenticated=AuthenticationService.isAuthenticated();

        };

        this.logout=function(){

            AuthenticationService.logout();

        }

    },
    controllerAs:'c'
});
