class interceptorService {

    constructor($state, $q){

        this.state=$state;
        this.q=$q;

    }

    request(config){

        const token=sessionStorage.getItem('token');
        if (token) config.headers['x-access-token'] = token;

        return config;

    }

    responseError(response){

        if (response.status == 403){

            sessionStorage.removeItem('token');
            this.state.go('login');

        }

        return this.q.reject(response);

    }

}

countryApp.service('interceptorService',interceptorService);


