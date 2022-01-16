class AuthenticationService {

    constructor($http, $state, $rootScope){

        this.http=$http;
        this.user=null;
        this.state=$state;
        this.rootScope=$rootScope;
        this.token='';

    }

    whoAmI(){

        return this.http.get('/api/me')
            .then(data => data.data)
            .then(me => {
                this.user=me;
                return this.user;

            });

    }

    isAuthenticated(){

        return sessionStorage.getItem('token') ? true : false;

    }

    getUser(){

        if (this.user) return new Promise((resolve, reject)=> resolve(this.user));

        else return this.whoAmI().then(me => {

            this.user=me;
            return this.user;

        });


    }

    getToken(){

        return this.token;

    }

    login(credentials){


        this.http.post('/authenticate',{credentials:credentials}).then(d => {


            if (d.data.status=='OK'){

                this.user=d.data.user;
                this.token=d.data.token;
                sessionStorage.setItem('token',this.token);
                this.state.go('main');
                this.rootScope.$broadcast('login');


            }

            else {

                console.log(d.data.description);

                this.rootScope.$broadcast('wrong',d.data.description);

            }

        });

    }

    logout(){

        sessionStorage.removeItem('token');
        this.user=null;
        this.state.go('login');
        this.rootScope.$broadcast('logout');

    }

}

countryApp.service('AuthenticationService', AuthenticationService);


