import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  citiesUrl: string = '../assets/cities.json';
  
  constructor(
    private http: HttpClient
  ) {}  

  getByCity(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68aa441e22ee39eaef98cb03b17c1d38&units=metric&lang=cz`);
  }

  getByLocation(lat: number, lon: number): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68aa441e22ee39eaef98cb03b17c1d38&units=metric&lang=cz`);
  }

  getCities(): Observable<any> {
    return this.http.get(this.citiesUrl);
  }
}
