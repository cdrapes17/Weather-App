import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInformationComponent } from './components/weather-information/weather-information.component';
import { WeatherInformationContainerComponent } from './container/weather-information-container/weather-information-container.component';
import { FiveDayForecastContainerComponent } from './container/five-day-forecast/five-day-forecast-container/five-day-forecast-container.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast/five-day-forecast.component';
import { SearchModule } from '../search/search.module';


@NgModule({
  imports: [
    CommonModule,
    SearchModule
  ],
  declarations: [WeatherInformationComponent, WeatherInformationContainerComponent, FiveDayForecastContainerComponent, FiveDayForecastComponent],
  exports: [WeatherInformationComponent, WeatherInformationContainerComponent]
})
export class WeatherInformationModule { }
