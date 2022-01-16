class CountryService {

    constructor($http, DataService, $rootScope){

        this.http=$http;
        this.dataService=DataService;
        this.rootScope=$rootScope;
        this.dataService.getData().then((d)=>{


            this.countries=d.data.countries;/*.map(country=>{
                country.population=parseFloat(country.population);
                country.gdp=parseFloat(country.gdp);
                return country;
            });*/

            this.rootScope.$broadcast('init');

        });



    }

    getCountries(){

        return this.countries;

    }

    addCountry(country){

        this.dataService.postData(country).then(d => {
            this.countries.push(country);
            this.rootScope.$broadcast('modeChange');
        });

    }

    deleteCountry(id){

        this.dataService.deleteData(id).then(d=>{
            this.countries.splice(this.countries.findIndex(c => c.id==id),1);
        });

    }

    editCountry(country){

        this.dataService.editData(country).then(d=>{

            let i = this.countries.findIndex(c => c.id==country.id);
            this.countries[i]=country;
            this.rootScope.$broadcast('modeChange');

        });

    }

}

countryApp.service('CountryService', CountryService);