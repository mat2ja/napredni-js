countryApp.component('countryList', {

    templateUrl:'./app/components/country-list.template.html',
    controller:function($http, DataService, $window, $scope, CountryService){



        this.countries=CountryService.getCountries();

        $scope.$on('init', (event, country)=>{

            this.countries=CountryService.getCountries();

        });

        $scope.$on('modeChange', ()=>{

            this.mode=''

        });


        this.changeSelected=function(country){

            this.selectedCountry=$window.angular.copy(country);


        };

        this.mode='';
        this.selectedCountry=null;

        this.doDelete=function(id){

            CountryService.deleteCountry(id);

        };

    },
    controllerAs:'c'

});