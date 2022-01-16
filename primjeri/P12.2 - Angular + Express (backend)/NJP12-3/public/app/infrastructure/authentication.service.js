class AuthenticationService {

    constructor($http, $state, $rootScope){

        this.http=$http;
        this.user=null;
        this.state=$state;
        this.rootScope=$rootScope;

    }

    isAuthenticated(){

        let auth=false;

        if (this.user!=null || sessionStorage.getItem('authenticated')=="true") auth=true;
        if (auth) this.user=JSON.parse(sessionStorage.getItem('user'));

        return auth;

    }

    getUser(){


        return this.user;

    }

    login(credentials){


        this.http.post('/authenticate',{credentials:credentials}).then(d => {


            if (d.data.status=='OK'){

                this.user=d.data.user;
                sessionStorage.setItem('authenticated',true);
                sessionStorage.setItem('user',JSON.stringify(this.user));
                this.state.go('main');


            }

            else {

                this.rootScope.$broadcast('wrong',d.data.description);

            }

        });

    }

    logout(){

        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('user');
        this.user=null;
        this.state.go('login');

    }

}

countryApp.service('AuthenticationService', AuthenticationService);

