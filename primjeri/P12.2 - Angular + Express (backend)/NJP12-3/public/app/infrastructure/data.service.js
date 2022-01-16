class DataService {

    constructor($http){
        this.http=$http;
        this.url='/api/countries';
    }

    getData() {

        return this.http.get(this.url,{cache:true});

    }

    postData(country){

        return this.http.post(this.url,{country: country});
    }

    deleteData(id){

        return this.http.delete(`${this.url}/${id}`);

    }

    editData(country){

        return this.http.put(this.url,{country: country});

    }


}

countryApp.service('DataService', DataService);