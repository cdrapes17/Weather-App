import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CityComponent, CountryComponent, TemperatureComponent]
})
export class WeatherInformationModule { }
