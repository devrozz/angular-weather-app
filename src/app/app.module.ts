import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
