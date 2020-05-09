import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherModel } from '../weather-model';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  cityID: number = 833;
  city: string;
  days: WeatherModel[] = [];
  environment = environment;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.get(this.cityID).subscribe(result => {
      this.city = result.city.name;
      for(let i = 0; i < result.list.length; i += 8) {
        const day = new WeatherModel(
          result.list[i].dt_txt,
          result.list[i].weather[0].icon,
          result.list[i].main.temp,
          result.list[i].main.feels_like,
          result.list[i].main.humidity,
          result.list[i].clouds.all
        )
        this.days.push(day);
      }
      console.log(this.days);
    })
  }

}
