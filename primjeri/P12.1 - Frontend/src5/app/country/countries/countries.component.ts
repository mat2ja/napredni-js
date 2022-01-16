import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./country.model";
import {map} from "rxjs/operators"
import {CountryService} from "../country.service";
import {BehaviorSubject, Subscription} from "rxjs";
import {User} from "../../shared/user.model";
import {AuthService} from "../../shared/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {

  query='';
  user : User = null;

  countries : Country[] = null;
  countrySubject : BehaviorSubject<Country[]>=null;
  subscription : Subscription = null;

  add:boolean = false;
  new : Country = {name:'',flagURL:'',population:0,capital:'',gdp:0};
  editingIndex : number = null;
  editingCountry : Country = {id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};

  selectedCountry : Country = {id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
  mode : string = '';


  displayedColumns: string[] = ['name', 'flagURL', 'population', 'capital','gdp', 'edit', 'delete'];
  dataSource: MatTableDataSource<Country>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private http: HttpClient, private countryService: CountryService, private auth : AuthService, private router:Router) { }

  ngOnInit() {

    this.user=this.auth.getUser();
    this.auth.authChange
        .subscribe(res => {
          console.log(res);
          if (res) {
            this.user=this.auth.getUser();
          } else {
            this.router.navigate(['login']);
          }
    });

    this.countrySubject=this.countryService.getCountries();
    this.subscription=this.countrySubject
        .subscribe(res => {
            this.countries=res;
            this.dataSource = new MatTableDataSource(this.countries);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;


        });

  }

    addCountry(){
        console.log(this.new);
        this.countryService.addCountry(this.new);
    }

    deleteCountry(i){
        console.log(i);
        let c = this.countries[i];
        this.countryService.deleteCountry(c.id);
    }

    startEditing(country){
      this.selectedCountry={...country};
      this.mode='edit';
    }


    startAdding(){
      this.selectedCountry={id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
      this.mode='add';
    }


    onCancel(){
      this.selectedCountry={id:'', name:'',flagURL:'',population:0,capital:'',gdp:0};
      this.mode='';
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
