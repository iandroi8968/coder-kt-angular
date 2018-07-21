import { RestResponse } from './../rest-response.model';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Result } from '../rest-response.model';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('100ms')),
      transition('inactive => active', animate('100ms'))
    ])  
  ]
})
export class FlipcardComponent implements OnInit {

  flip: string = 'inactive';
  countries : Result[];
  cardData : Result;
  counter : number = 0;
  constructor(private countriesService : CountriesService) {}

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    this.cardData = this.countries[this.counter++];
  }


  ngOnInit() {
    this.countriesService.getCountries().subscribe((data : RestResponse[]) => {
      this.countries = data['RestResponse']['result'];
      this.cardData = this.countries[this.counter++];
    });
  }

}
