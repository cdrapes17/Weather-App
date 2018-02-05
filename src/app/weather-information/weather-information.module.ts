import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInformationComponent } from './components/weather-information/weather-information.component';
import { WeatherInformationContainerComponent } from './container/weather-information-container/weather-information-container.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherInformationComponent, WeatherInformationContainerComponent],
  exports: [WeatherInformationComponent, WeatherInformationContainerComponent]
})
export class WeatherInformationModule { }
