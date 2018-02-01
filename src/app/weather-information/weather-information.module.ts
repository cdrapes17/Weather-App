import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './components/city/city.component';
import { CountryComponent } from './components/country/country.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherInformationContainerComponent } from './weather-information-container/weather-information-container.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherInformationService } from './services/weather-information.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [WeatherInformationService],
  declarations: [CityComponent, CountryComponent, TemperatureComponent, WeatherInformationContainerComponent],
  exports: [CityComponent, CountryComponent, TemperatureComponent, WeatherInformationContainerComponent]
})
export class WeatherInformationModule { }
