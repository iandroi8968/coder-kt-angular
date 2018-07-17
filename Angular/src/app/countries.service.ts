import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesComponent } from './countries/countries.component';
import { RestResponse } from './rest-response.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnInit {

  constructor(private http : HttpClient) { 
  }
  ngOnInit() {
  }
 getCountries() {
  return this.http.get<RestResponse[]>("http://services.groupkt.com/country/get/all");
 }
}
