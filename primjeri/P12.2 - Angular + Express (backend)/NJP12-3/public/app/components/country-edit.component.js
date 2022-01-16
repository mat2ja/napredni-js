countryApp.component('countryEdit', {
   templateUrl:'./app/components/country-edit.template.html',
    bindings:{
       country:'<',
       mode:'<'
   }, require: {
        parent: '^^countryList'
    },
   controller:function($window, DataService, CountryService){



       this.addCountry=()=>{

           CountryService.addCountry(this.country);

       };

       this.doneEditing=function(){

           CountryService.editCountry(this.country);

       }

   },
    controllerAs:'c'
});