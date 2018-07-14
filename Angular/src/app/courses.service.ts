import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { RestResponse } from './rest-response.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements OnInit {

  constructor(private http : HttpClient) { 
  }
  ngOnInit() {
  }
 getCourses() {
  return this.http.get<RestResponse[]>("http://services.groupkt.com/country/get/all");
 }
}
