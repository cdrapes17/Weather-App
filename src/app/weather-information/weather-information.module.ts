import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherInformationComponent } from './components/weather-information/weather-information.component';
import { WeatherInformationContainerComponent } from './container/weather-information-container/weather-information-container.component';
import { WeatherInformationService } from './services/weather-information.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [WeatherInformationService, ],
  declarations: [WeatherInformationComponent, WeatherInformationContainerComponent],
  exports: [WeatherInformationComponent, WeatherInformationContainerComponent]
})
export class WeatherInformationModule { }
