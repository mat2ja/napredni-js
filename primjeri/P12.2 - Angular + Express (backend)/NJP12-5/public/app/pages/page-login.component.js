countryApp.component('login',{

    templateUrl:'./app/pages/page-login.template.html',
    controller:function(AuthenticationService, $scope){

        this.login=function(){

            AuthenticationService.login(this.credentials);


        };

        $scope.$on('wrong',(e, d)=>{

            this.desc=d;

        });


    },
    controllerAs:'c'

});