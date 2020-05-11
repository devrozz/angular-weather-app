import { Component, OnInit, Input } from '@angular/core';
import { WeatherModel } from '../weather-model';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
 
  city: string;
  environment = environment;
  days: WeatherModel[];
  message: string;

  constructor() { }

  ngOnInit(): void {    
  }

  getCity($event) {
    this.city = $event;
  }

  getDays($event) {
    this.days = $event;
  }
}
