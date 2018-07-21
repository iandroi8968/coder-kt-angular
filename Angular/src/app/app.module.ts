import { CountriesService } from './countries.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CoursesComponent } from './countries/countries.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlipcardComponent } from './flipcard/flipcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    FlipcardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "countries" , component : CoursesComponent},
      {path : "flicards" , component : FlipcardComponent}
    ]),
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
