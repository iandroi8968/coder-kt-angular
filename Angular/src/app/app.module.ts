import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "countries" , component : CoursesComponent}
    ])
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
