import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WeatherService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
