import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../city-model';
import { WeatherService } from '../weather.service';
import cities from '../../../cities.json'
import { WeatherModel } from '../weather-model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  days: WeatherModel[] = [];
  value = '';
  //cities = cities;
  @Output() outputDays: EventEmitter<WeatherModel[]> = new EventEmitter();
  @Output() city: EventEmitter<string> = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(text: string): void {
    if(text !== '') {
    }
  }

  deleteInputValue() {
    this.value = '';
  }

  getInputValue(city: City) {
    this.value = city.name;
  }

  getWeather() {
    this.days = [];
    this.weatherService.get(this.value).subscribe(result => {
      this.city.emit(result.city.name);
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
      this.outputDays.emit(this.days);
    })
  }
}
