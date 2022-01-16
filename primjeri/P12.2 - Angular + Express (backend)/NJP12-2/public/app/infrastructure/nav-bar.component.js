countryApp.component('navBar', {
   template:`
        <div class="navbar navbar-default">
            <ul class="nav nav-pills">
              <li role="presentation" ng-class="c.getClass('main')"><a ui-sref="main">Home</a></li>
              <li role="presentation" ng-class="c.getClass('about')"><a ui-sref="about">About</a></li>            
            </ul>
       </div>      
   `,
    controller:function($state){

       this.getClass=function(c){
           if ($state.current.name==c) return 'active';

       }

    },
    controllerAs:'c'
});
