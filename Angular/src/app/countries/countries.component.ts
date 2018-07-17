import { Result, RestResponse } from '../rest-response.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CoursesComponent implements OnInit {
  private result : Result[];
  constructor(private coursesService : CountriesService) { 
  }

  ngOnInit() {
    this.coursesService
      .getCountries()
      .subscribe((data : RestResponse[]) =>{
        this.result = data['RestResponse']['result'];
      });
  }
}
