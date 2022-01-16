countryApp.component('detail', {

    templateUrl:`./app/pages/page-detail.template.html`,
    controller:function($stateParams, $location, $timeout, DataService){

        this.name = $stateParams.countryName;

        DataService.getData().then((data)=>{

            this.countries = data.data;

            this.countries= this.countries.filter((country)=>{
                if (country.name === this.name) return true;
            });

            this.country=this.countries[0];

            $timeout(()=>{
                if (this.country==undefined) $location.path('/'); //$state.go('main');
            },2000);


        });

    },
    controllerAs:'c'

});