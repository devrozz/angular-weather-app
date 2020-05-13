import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../city-model';
import { WeatherService } from '../weather.service';
import { WeatherModel } from '../weather-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  days: WeatherModel[] = [];
  latitude = 0;
  longitude = 0;
  value = '';
  cities: City[];
  citiesMatch: City[];
  showResults = false;
  
  @Output() outputDays: EventEmitter<WeatherModel[]> = new EventEmitter();
  @Output() city: EventEmitter<string> = new EventEmitter();
  @Output() showChart: EventEmitter<boolean> = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCities().subscribe(cities => {
      this.cities = cities;
    })
  }

  search(text: string): void {
    if(text !== '') {
      this.showResults = true;
      let matches = this.cities.filter(city => {
        const regex = new RegExp(`^${text}`, 'gi')
        return city.name.match(regex);
      })
      this.citiesMatch = matches;
    }
  }

  deleteInputValue() {
    this.value = '';
    this.showResults = false;
  }

  getInputValue(city: City) {
    this.value = city.name;
    this.showResults = false;
  }

  getLocationWeather() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {        
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.weatherService.getByLocation(this.latitude, this.longitude).subscribe(result => {
          this.days = [];          
          this.city.emit(result.name);
          const today = new Date().toString();
          const day = new WeatherModel(
            today,
            result.weather[0].icon,
            result.main.temp,
            result.main.feels_like,
            result.main.humidity,
            result.clouds.all
          )
          this.days.push(day)
          this.outputDays.emit(this.days);
          this.showChart.emit(true);
        })
      });
    }
  }

  getWeather() {
    this.days = [];
    this.weatherService.getByCity(this.value).subscribe(result => {
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
      this.showChart.emit(true);
      this.value = '';
    })
  }
}
