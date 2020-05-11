import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(
    private http: HttpClient
  ) {}  

  get(city: string): Observable<any> {
    return this.http.get(`${environment.api_url}q=${city}&appid=${environment.api_key}&units=metric&lang=cz`)
    .pipe();
  }
}
