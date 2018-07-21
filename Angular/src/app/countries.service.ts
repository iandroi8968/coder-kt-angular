import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from './rest-response.model';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnInit {

  constructor(private http : HttpClient) { 
  }
  ngOnInit() {
  }
 getCountries() : Observable<RestResponse[]> {
  return this.http.get<RestResponse[]>("http://services.groupkt.com/country/get/all");
 }
 getCountriesByAlphaCode(alphaCode : String) : Observable<RestResponse[]> {
  return this.http.get<RestResponse[]>("http://services.groupkt.com/country/get/iso3code/" + alphaCode);
 }
}
