import { Result, RestResponse } from './../rest-response.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private result : Result[];
  constructor(private coursesService : CoursesService) { 
  }

  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe((data : RestResponse[]) =>{
        this.result = data['RestResponse']['result'];
      });
  }
}
