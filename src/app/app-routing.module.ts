import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherInformationContainerComponent } from './weather-information/container/weather-information-container/weather-information-container.component';
import { FiveDayForecastContainerComponent } from './weather-information/container/five-day-forecast/five-day-forecast-container/five-day-forecast-container.component';

const routes: Routes = [
  // add data object of each route containing it's state
  // this will be used to be the state of the animation transitions
  {path: 'current-forecast', component: WeatherInformationContainerComponent, data: {state: 'current'}},
  {path: 'five-day-forecast', component: FiveDayForecastContainerComponent, data: {state: 'five-day'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
