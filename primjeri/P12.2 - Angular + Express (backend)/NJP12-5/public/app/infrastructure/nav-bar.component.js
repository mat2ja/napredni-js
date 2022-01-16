countryApp.component('navBar', {
    template:`
        <div class="navbar navbar-default">
            <ul class="nav nav-pills">
              <li role="presentation" ng-class="c.getClass('main')"><a ui-sref="main">Home</a></li>
              <li role="presentation" ng-class="c.getClass('about')"><a ui-sref="about">About</a></li>            
              <li role="presentation" ng-show="c.user.level==1" ng-class="c.getClass('admin')"><a ui-sref="admin">Admin</a></li>            
              <li class="pull-right" role="presentation"><a ng-show="c.authenticated" ng-click="c.logout()">Logout</a></li>            
            </ul>
       </div>      
   `,
    controller:function($state, AuthenticationService, $scope){

        this.$onInit = function(){

            this.authenticated=AuthenticationService.isAuthenticated();
            if (this.authenticated) AuthenticationService.getUser().then(me=> this.user=me);

        };

        this.getClass=function(c){
            if ($state.current.name==c) return 'active';

        };



        $scope.$on('logout',()=>{

            this.user=null;
            this.authenticated=false;

        });

        $scope.$on('login',()=>{

            this.authenticated=AuthenticationService.isAuthenticated();
            if (this.authenticated) AuthenticationService.getUser().then(me=> this.user=me);

        });

       /* this.$doCheck=function(){

            this.authenticated=AuthenticationService.isAuthenticated();

        };*/

        this.logout=function(){

            AuthenticationService.logout();

        }

    },
    controllerAs:'c'
});
