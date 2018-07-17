import { Result, RestResponse } from './../rest-response.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../countries.service';
import { MatTableDataSource, MatPaginator } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CoursesComponent implements OnInit {
  private result : Result[];
  private dataSource : MatTableDataSource<Result>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'alpha2_code', 'alpha3_code'];
  
  constructor(private countriesService : CountriesService) { 
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data : RestResponse[]) {
      this.result = data['RestResponse']['result'];
      this.dataSource = new MatTableDataSource<Result>(this.result);
      this.dataSource.paginator = this.paginator;
    });
  }
}
