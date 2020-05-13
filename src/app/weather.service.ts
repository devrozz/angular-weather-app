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
    return this.http.get(`${environment.api_url}q=${city}&appid=${environment.api_key}&units=metric&lang=cz`);
  }

  getByLocation(lat: number, lon: number): Observable<any> {
    return this.http.get(`${environment.api_url_location}lat=${lat}&lon=${lon}&appid=${environment.api_key}&units=metric&lang=cz`);
  }

  getCities(): Observable<any> {
    return this.http.get(this.citiesUrl);
  }
}
