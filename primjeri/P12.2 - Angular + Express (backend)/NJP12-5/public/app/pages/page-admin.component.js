countryApp.component('admin', {

    templateUrl:`./app/pages/page-admin.template.html`,
    controller:function(UserService, AuthenticationService, $state){

        this.$onInit = function(){

           /* if (!AuthenticationService.isAuthenticated()) $state.go('login'); else {

                AuthenticationService.getUser().then(me =>{

                    this.user=me;
                    if (this.user.level!=1) $state.go('main');

                });

            }*/

            UserService.getData()
                .then(data => data.data.users)
                .then(users => {this.users=users});

        };

        this.doDelete=function(id){

            UserService.deleteData(id)
                .then(data => {

                    this.users=this.users.filter(user => user.id!=id);

                });

        };

        this.doUpdate=function(i){

            let newLevel= this.users[i].level==1 ? 2 : 1;

            let user = angular.copy(this.users[i]);
            user.level=newLevel;

            UserService.editData(user)
                .then(data => {

                    this.users[i].level=newLevel;

            });




        }



    },
    controllerAs:'c'

});