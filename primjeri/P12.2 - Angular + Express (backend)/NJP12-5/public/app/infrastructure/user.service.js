class UserService {

    constructor($http){
        this.http=$http;
        this.url='/api/users';
    }

    getData() {

        return this.http.get(this.url,{cache:true});

    }

    deleteData(id){

        return this.http.delete(`${this.url}/${id}`);

    }

    editData(user){

        return this.http.put(this.url,{user: user});

    }


}

countryApp.service('UserService', UserService);